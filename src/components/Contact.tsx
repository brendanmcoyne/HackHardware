import { useState } from 'react';
import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
`;

const FormWrapper = styled.div`
    background-color: #223c78;
    padding: 2rem;
    border-radius: 16px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    color: white;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    height: 120px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    resize: none;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #00b894;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: #636e72;
        cursor: not-allowed;
    }

    &:hover:enabled {
        background-color: #019875;
    }
`;

const StatusMessage = styled.p<{ status: string }>`
    color: ${({ status }) =>
    status === 'success' ? 'lightgreen' :
        status === 'fail' || status === 'error' ? 'salmon' : 'white'};
    margin-top: 1rem;
    text-align: center;
`;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const sendMessage = async () => {
        setSending(true);
        setStatus(null);
        try {
            const res = await fetch('https://hack-hardware.vercel.app/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('fail');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        } finally {
            setSending(false);
        }
    };

    return (
        <Page>
            <Title>Contact Us</Title>
            <FormWrapper>
                <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextArea
                    placeholder="Your Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <Button onClick={sendMessage} disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                </Button>
                {status && (
                    <StatusMessage status={status}>
                        {status === 'success' && '✅ Message sent successfully!'}
                        {status === 'fail' && '❌ Failed to send message. Please try again.'}
                        {status === 'error' && '⚠️ An unexpected error occurred.'}
                    </StatusMessage>
                )}
            </FormWrapper>
        </Page>
    );
};

export default Contact;
