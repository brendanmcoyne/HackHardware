import { useState } from "react";
import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 2rem 1rem;
    background: radial-gradient(circle at top, #e0f7ff 0%, #f5f5f5 100%);
    position: relative;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 400px;
    background-image: url("/circuits.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }
`;

const TitleText = styled.h1`
    font-weight: bold;
    font-size: 3rem;
    color: #ffffff;
    z-index: 2;
`;

const FormWrapper = styled.div`
    background: #f9f9f9;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
`;

const Input = styled.input<{ $error?: boolean }>`
    width: 100%;
    padding: 12px;
    margin-bottom: 1rem;
    border: ${({ $error }) => ($error ? "2px solid salmon" : "1px solid #ccc")};
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: #ffffff;
`;

const TextArea = styled.textarea<{ $error?: boolean }>`
    width: 100%;
    padding: 12px;
    height: 120px;
    margin-bottom: 1rem;
    border: ${({ $error }) => ($error ? "2px solid salmon" : "1px solid #ccc")};
    border-radius: 8px;
    font-size: 1rem;
    resize: none;
    box-sizing: border-box;
    background-color: #ffffff;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #006eaa;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
        background-color: #636e72;
        cursor: not-allowed;
    }

    &:hover:enabled {
        background-color: #005580;
    }
`;

const SectionTitle = styled.h2` 
    font-weight: 700; 
    font-size: 2rem; 
    text-align: center; 
    margin-bottom: 20px; 
    color: #006eaa; 
`;

const Paragraph = styled.p` 
    max-width: 700px; 
    margin: 0 auto 2rem auto; 
    text-align: center; 
    font-size: 1.1rem; 
    line-height: 1.6; 
    color: #333; 
`;

const StatusMessage = styled.p<{ status: string }>`
    color: ${({ status }) =>
            status === "success" ? "green" :
                    status === "fail" || status === "error" ? "red" :
                            status === "missing" ? "salmon" : "#333"};
    margin-top: 1rem;
    text-align: center;
`;

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const sendMessage = async () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus("missing");
            return;
        }
        setSending(true);
        setStatus(null);
        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else setStatus("fail");
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <Page>
            <LogoWrapper>
                <TitleText>Contact HackHardware</TitleText>
            </LogoWrapper>

            <SectionTitle>📬 Get in Touch</SectionTitle>
            <Paragraph>
                Have questions about HackHardware? Want to collaborate, sponsor, or just say hi?
                Fill out the form below and we’ll get back to you as soon as possible.
            </Paragraph>
            <FormWrapper>
                <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} $error={status==="missing" && !name.trim()} />
                <Input placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} $error={status==="missing" && !email.trim()} />
                <TextArea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} $error={status==="missing" && !message.trim()} />
                <Button onClick={sendMessage} disabled={sending}>{sending ? "Sending..." : "Send Message"}</Button>
                {status && (
                    <StatusMessage status={status}>
                        {status === "missing" && "⚠️ Please fill out all fields."}
                        {status === "success" && "✅ Message sent successfully!"}
                        {status === "fail" && "❌ Failed to send message. Please try again."}
                        {status === "error" && "⚠️ An unexpected error occurred."}
                    </StatusMessage>
                )}
            </FormWrapper>
        </Page>
    );
}
