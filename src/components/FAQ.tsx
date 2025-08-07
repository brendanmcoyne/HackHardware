import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
`;

const FAQItem = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.h2`
    font-weight: bold;
    font-size: 50px;
`;

function FAQEntry({ question, answer }: { question: string; answer: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FAQItem>
            <Question onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span>{isOpen ? "▲" : "▼"}</span>
            </Question>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{ padding: "0.5rem 0" }}>
                            <p>{answer}</p>
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
            <TitleText>Frequently Asked Questions</TitleText>

            <FAQEntry
                question="Who can attend our meetings/events?"
                answer="HackHardware is open to all undergraduate and graduate students at BU.
                All majors are welcome and encouraged to participate."
            />
            <FAQEntry
                question="What events does HackHardware have?"
                answer="HackHardware organizes hackathons, workshops, guest lectures, technical
                demonstrations, and other events. We provide students with opportunities to participate
                in engineering projects and learn about specific hardware and software topics. We encourage
                everyone to come to our biweekly meetings and read our weekly emails."
            />
            <FAQEntry
                question="What are tracks?"
                answer="Tracks are specific projects individuals or groups participate in during a hackathon.
                Each track contains a different assignment of varying difficulty. For events we typically have tracks
                for all skill levels so that everyone can participate regardless of experience. "
            />
            <FAQEntry
                question="How do I choose a track?"
                answer={
                    <>
                        <p>In our hackathon applications, you can choose the track that you are interested in! If you
                            wish to change your track, you have until two weeks before the hackathon commences to email
                            <a href="mailto:hackh@bu.edu"> hackh@bu.edu</a> to change your track.</p>
                    </>
                }
            />
            <FAQEntry
                question="What if I'm unable to attend the hackathon I signed up for?"
                answer={
                    <>
                        <p>If you're suddenly unable to attend a hackathon, please email
                            <a href="mailto:hackh@bu.edu"> hackh@bu.edu</a> right away.
                            For most of our events we have a waitlist of people willing to take your place.
                            Not attending a hackathon and not letting us know could result in removal from future
                            hackathons and events</p>
                    </>
                }
            />
            <FAQEntry
                question="What if I have more questions?"
                answer={
                    <>
                        Email <a href="mailto:hackh@bu.edu">hackh@bu.edu</a> or use our{" "}
                        <a href="/contact">contact form</a>.
                    </>
                }
            />
        </Page>
    );
}
