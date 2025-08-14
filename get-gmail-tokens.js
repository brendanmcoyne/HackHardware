import readline from 'readline';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

async function main() {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', // this is required!
        scope: ['https://www.googleapis.com/auth/gmail.send']
    });

    console.log('Authorize this app by visiting this URL:\n', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('\nEnter the code from that page here: ', async (code) => {
        try {
            const { tokens } = await oauth2Client.getToken(code);
            console.log('\n✅ Your GMAIL_TOKENS JSON (copy this to Vercel env variable):\n');
            console.log(JSON.stringify(tokens, null, 2));
        } catch (err) {
            console.error('Error retrieving tokens', err);
        } finally {
            rl.close();
        }
    });
}

main();