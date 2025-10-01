import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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

const Particle = styled.div<{ top: number; left: number; size: number; delay: number }>`
    position: absolute;
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    background: rgba(0, 123, 255, 0.2);
    z-index: 0;
    animation: float 6s ease-in-out infinite;
    animation-delay: ${({ delay }) => delay}s;

    @keyframes float {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-20px) scale(1.2); }
        100% { transform: translateY(0) scale(1); }
    }
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 400px;
    background-image: url('/CandJ.jpg');
    background-size: cover;
    background-position: 30% 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }
`;

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const TitleText = styled.h1`
    font-weight: bold;
    font-size: 3rem;
    margin: 0;
    color: #ffffff;
`;

const Question = styled.div`
    cursor: pointer;
    font-weight: bold;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
`;

const QuestionText = styled.div<{ isOpen: boolean }>`
    width: ${({ isOpen }) => (isOpen ? "100%" : "80%")};
    max-width: 100%;
    text-align: left;
    transition: width 0.3s ease;
    white-space: normal;
    overflow-wrap: break-word;
`;

const FAQItem = styled.div`
    width: 100%;
    max-width: 550px; 
    margin: 1rem 0;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
`;

function FAQEntry({ question, answer }: { question: string; answer: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FAQItem>
            <Question onClick={() => setIsOpen(!isOpen)}>
                <QuestionText isOpen={isOpen}>{question}</QuestionText>
                <span>{isOpen ? "▲" : "▼"}</span>
            </Question>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 500, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden", width: "100%" }}
                    >
                        <div style={{ padding: "0.5rem 0", width: "100%", boxSizing: "border-box" }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </FAQItem>
    );
}


export default function FAQ() {
    return (
        <Page>
            {Array.from({ length: 15 }).map((_, i) => (
                <Particle
                    key={i}
                    top={Math.random() * 95}
                    left={Math.random() * 95}
                    size={Math.random() * 25 + 8}
                    delay={Math.random() * 4}
                />
            ))}

            <LogoWrapper>
                <WrapperDiv>
                    <TitleText>Frequently Asked Questions</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <div style={{ marginTop: "2rem" }}>
                <FAQEntry
                    question="Who can attend our meetings/events?"
                    answer="HackHardware is open to all undergraduate and graduate students at BU. All majors are welcome and encouraged to participate."
                />
                <FAQEntry
                    question="What events does HackHardware have?"
                    answer="HackHardware organizes hackathons, workshops, guest lectures, technical demonstrations, and other events. We provide students with opportunities to participate in engineering projects and learn about specific hardware and software topics. We encourage everyone to come to our biweekly meetings and read our weekly emails."
                />
                <FAQEntry
                    question="What are tracks?"
                    answer="Tracks are specific projects individuals or groups participate in during a hackathon. Each track contains a different assignment of varying difficulty. For events we typically have tracks for all skill levels so that everyone can participate regardless of experience."
                />
                <FAQEntry
                    question="How do I choose a track?"
                    answer={
                        <p>In our hackathon applications, you can choose the track that you are interested in! If you wish to change your track, you have until two weeks before the hackathon commences to email <a href="mailto:hackh@bu.edu"> hackh@bu.edu</a> to change your track.</p>
                    }
                />
                <FAQEntry
                    question="What if I'm unable to attend the hackathon I signed up for?"
                    answer={
                        <p>If you're suddenly unable to attend a hackathon, please email <a href="mailto:hackh@bu.edu"> hackh@bu.edu</a> right away. For most of our events we have a waitlist of people willing to take your place. Not attending a hackathon and not letting us know could result in removal from future hackathons and events.</p>
                    }
                />
                <FAQEntry
                    question="What if I have more questions?"
                    answer={
                        <>
                            Email <a href="mailto:hackh@bu.edu">hackh@bu.edu</a> or use our <a href="/contact">contact form</a>.
                        </>
                    }
                />
            </div>
        </Page>
    );
}
