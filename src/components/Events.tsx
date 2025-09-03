import styled from "styled-components";
import { motion } from "framer-motion";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 700px;
    background-image: url('/Opening.jpg');
    background-size: cover;
    background-position: center;
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
    transform: translateY(-20px);
    position: relative;
    z-index: 2;
`;

const TitleText = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin: 0;
    line-height: 1.1;
    color: lightgray;
    z-index: 1;
`;

const Section = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: #006eaa;
`;

const Paragraph = styled.p`
    max-width: 800px;
    margin: 4rem 0;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
`;

const EventGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
`;

const EventCard = styled(motion.div)`
    background: #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
`;

const EventImage = styled.div`
    width: 100%;
    height: 180px;
    background-color: #ddd; /* placeholder */
    background-size: cover;
    background-position: center;
`;

const EventContent = styled.div`
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
`;

const EventTitle = styled.h3`
    font-size: 1.25rem;
    margin: 0 0 8px 0;
    font-weight: 700;
    color: #222;
`;

const EventDate = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    color: #006eaa;
    margin: 0 0 12px 0;
`;

const EventDescription = styled.p`
    font-size: 0.95rem;
    line-height: 1.5;
    color: #444;
    margin: 0;
`;

export default function Events() {
    const pastEvents = [
        {
            title: "HackHardware x AIAA Drone Building Mini-Hackathon",
            date: "February 23, 2025 – One-Day Event",
            desc: "In collaboration with Boston University’s American Institute of Aeronautics and Astronautics (AIAA), students will design, prototype, and test drones in a fast-paced one-day hackathon. This event is beginner-friendly, offering opportunities for teamwork and hands-on learning.",
            img: "/drone-placeholder.jpg",
        },
        {
            title: "HackHardware x RASTIC Robotics Design and Control Competition",
            date: "March 22–30, 2025 – Week-Long Competition",
            desc: "Partnering with BU’s Robotics and Autonomous Systems Teaching and Innovation Center (RASTIC), teams will build and program robots to solve a surprise engineering challenge. This self-paced event emphasizes problem-solving, collaboration, and creativity.",
            img: "/robotics-placeholder.jpg",
        },
        {
            title: "HackHardware Fall 2024 Hackathon",
            date: "November 15–17, 2024 – Three-Day Hackathon",
            desc: "Our signature event brought students together for a video game–themed hackathon featuring software and three hardware tracks (beginner, intermediate, advanced). Participants designed original games, recreated multiplayer board games, built handheld consoles, and prototyped custom controllers.",
            img: "/fall2024-hackathon.jpg",
        },
        {
            title: "HackHardware x RASTIC MiniHack",
            date: "April 5–6, 2024 – 24-Hour Hackathon",
            desc: "In partnership with RASTIC, we hosted a space-themed robotics hackathon where participants designed and programmed robots that combined art, science, and technology. The event was open to all majors and celebrated creativity in engineering.",
            img: "/rasitc-minihack.jpg",
        },
        {
            title: "KTP x HackHardware x BUILDS Hack Innovat3",
            date: "March 29–30, 2024 – Two-Day Hackathon",
            desc: "Together with Kappa Theta Pi’s Lambda Chapter and BUILDS, HackHardware organized a dynamic hackathon that blended software and hardware tracks. Teams of all skill levels collaborated on ambitious projects while fostering innovation, teamwork, and community.",
            img: "/hack-innovat3.jpg",
        },
        {
            title: "HackHardware TinyML Workshop",
            date: "February 23, 2024 – Workshop",
            desc: "Members explored Tiny Machine Learning (TinyML) using Arduino hardware and TensorFlow Lite Micro. Participants built real-time gesture recognition systems on the Arduino Nano 33 BLE Sense, gaining hands-on experience with cutting-edge AI tools.",
            img: "/tinyml.jpg",
        },
        {
            title: "HackHardware Fall 2023 Hackathon",
            date: "November 2023 – Three-Day Hackathon",
            desc: "Held at BU’s Faculty of Computing & Data Sciences (17th floor), this hackathon welcomed students from all majors to create, collaborate, and innovate. The event featured software and hardware tracks, workshops, and community-building activities.",
            img: "/fall2023-hackathon.jpg",
        },
    ];

    return (
        <>
            <LogoWrapper>
                <WrapperDiv>
                    <TitleText>Upcoming Events</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <Paragraph>
                Our club is known for its engaging events, which include workshops, guest lectures, and technical demonstrations.
                In particular, our semesterly hackathons offer unparalleled experiences, where members collaborate on innovative projects.
                These hackathons encapsulate the spirit of HackHardware and testify to our commitment to fostering well-rounded engineers
                with real-world relevance.
            </Paragraph>

            <Page>
            <Section>
                <SectionTitle>📅 Upcoming Events</SectionTitle>
                <EventGrid>
                    <EventCard>
                        <EventImage style={{ backgroundImage: "url('/drone-placeholder.jpg')" }} />
                        <EventContent>
                            <EventTitle>HackHardware x AIAA Drone Building Mini-Hackathon</EventTitle>
                            <EventDate>February 23, 2025 – One-Day Event</EventDate>
                            <EventDescription>
                                In collaboration with Boston University’s American Institute of Aeronautics and Astronautics (AIAA),
                                students will design, prototype, and test drones in a fast-paced one-day hackathon.
                                This event is beginner-friendly, offering opportunities for teamwork and hands-on learning.
                            </EventDescription>
                        </EventContent>
                    </EventCard>

                    <EventCard>
                        <EventImage style={{ backgroundImage: "url('/robotics-placeholder.jpg')" }} />
                        <EventContent>
                            <EventTitle>HackHardware x RASTIC Robotics Design and Control Competition</EventTitle>
                            <EventDate>March 22–30, 2025 – Week-Long Competition</EventDate>
                            <EventDescription>
                                Partnering with BU’s Robotics and Autonomous Systems Teaching and Innovation Center (RASTIC),
                                teams will build and program robots to solve a surprise engineering challenge.
                                This self-paced event emphasizes problem-solving, collaboration, and creativity.
                            </EventDescription>
                        </EventContent>
                    </EventCard>
                </EventGrid>
            </Section>

            {/* Past Events */}
                <Section>
                    <SectionTitle>🕑 Past Events</SectionTitle>
                    <EventGrid
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {pastEvents.map((event, i) => (
                            <EventCard
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <EventImage style={{ backgroundImage: `url(${event.img})` }} />
                                <EventContent>
                                    <EventTitle>{event.title}</EventTitle>
                                    <EventDate>{event.date}</EventDate>
                                    <EventDescription>{event.desc}</EventDescription>
                                </EventContent>
                            </EventCard>
                        ))}
                    </EventGrid>
                </Section>
            </Page>
        </>


    );
}