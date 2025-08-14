import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing name, email, or message' });
    }

    try {
        // OAuth2 client
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URI
        );

        // Load saved tokens from environment
        const savedTokens = JSON.parse(process.env.GMAIL_TOKENS);
        oauth2Client.setCredentials(savedTokens);

        // Force a token refresh if expired
        if (savedTokens.refresh_token) {
            const newTokens = await oauth2Client.getAccessToken();
            oauth2Client.setCredentials({ ...savedTokens, access_token: newTokens.token });
        }

        // Encode email
        const rawMessage = Buffer.from(
            `To: hackh@bu.edu\r\n` +
            `Subject: Message from ${name} <${email}>\r\n` +
            `Reply-To: ${email}\r\n\r\n` +
            `${message}`
        )
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        await google.gmail({ version: 'v1', auth: oauth2Client })
            .users.messages.send({ userId: 'me', requestBody: { raw: rawMessage } });

        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
