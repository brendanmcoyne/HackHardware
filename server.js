import express from 'express';
import { google } from 'googleapis';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({origin: 'https://hack-hardware.vercel.app'}));
app.use(express.json());

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

let savedTokens = null;

// STEP 1: Start OAuth flow
app.get('/auth/google', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send'],
    });
    res.redirect(authUrl);
});

// STEP 2: OAuth2 callback
app.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        savedTokens = tokens;
        res.send(`<h2>Login successful!</h2><p>You can now return to your app.</p>`);
    } catch (error) {
        console.error('Error retrieving access token', error);
        res.status(500).send('Authentication failed');
    }
});

// STEP 3: Send email endpoint
app.post('/send-email', async (req, res) => {
    if (!savedTokens) {
        return res.status(401).send('User not authenticated');
    }

    oauth2Client.setCredentials(savedTokens);

    try {
        // Refresh access token if needed
        const newTokens = await oauth2Client.getAccessToken();
        if (newTokens.token) {
            savedTokens.access_token = newTokens.token;
            oauth2Client.setCredentials(savedTokens);
        }
    } catch (err) {
        console.error('Error refreshing access token:', err);
        return res.status(401).send('Failed to refresh access token');
    }

    const { name, email, message } = req.body;

    const to = 'hackh@bu.edu';
    const subject = `Message from ${name} <${email}>`;
    const body = message;

    const rawMessage = Buffer.from(
        `To: ${to}\r\n` +
        `Subject: ${subject}\r\n` +
        `Reply-To: ${email}\r\n\r\n` +
        `${body}`
    )
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    try {
        await google.gmail({ version: 'v1', auth: oauth2Client }).users.messages.send({
            userId: 'me',
            requestBody: {
                raw: rawMessage,
            },
        });

        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));