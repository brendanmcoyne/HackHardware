import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const code = req.query.code;
    if (!code) return res.status(400).send('Missing code parameter');

    try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URI
        );

        const { tokens } = await oauth2Client.getToken(code);

        // Send tokens back to frontend — frontend must store them securely
        res.status(200).json(tokens);
    } catch (error) {
        console.error('Error retrieving access token', error);
        res.status(500).send('Authentication failed');
    }
}
