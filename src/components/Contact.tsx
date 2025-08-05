import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);

    const sendMessage = async () => {
        setSending(true);
        try {
            const res = await fetch('https://hack-hardware-api.vercel.app/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                alert('Email sent!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Failed to send email');
            }
        } catch (err) {
            alert('Error sending email');
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
            <h2>Contact Us</h2>
            <input
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: '100%', marginBottom: 10, padding: 8 }}
            />
            <input
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', marginBottom: 10, padding: 8 }}
            />
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                style={{ width: '100%', height: 120, marginBottom: 10, padding: 8 }}
            />
            <button onClick={sendMessage} disabled={sending} style={{ padding: '10px 20px' }}>
                {sending ? 'Sending...' : 'Send Message'}
            </button>
        </div>
    );
};

export default Contact;
