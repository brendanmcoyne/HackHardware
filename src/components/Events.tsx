import styled from "styled-components";
import { motion } from "framer-motion";

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

const Section = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-bottom: 60px;
`;

const Paragraph = styled.p`
    max-width: 800px;
    margin: 3rem 0;
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

const EventImage = styled.div`
    width: 100%;
    height: 180px;
    background-color: #ddd; 
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

const LogoWrapper = styled.div`
    width: 100%;
    height: 400px; /* match Contact page */
    background-image: url("/Opening.jpg");
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
    text-align: center;
`;


const EventCard = styled(motion.div)`
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 20px rgba(0,123,255,0.5));
    }
`;

const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 20px;
    color: #222;
    text-shadow: 0px 2px 6px rgba(0, 123, 255, 0.2);
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

export default function Events() {
    const pastEvents = [
        {
            title: "HackHardware x RASTIC Robotics Design and Control Competition",
            date: "March 22–30, 2025 – Week-Long Competition",
            desc: "Partnering with BU’s Robotics and Autonomous Systems Teaching and Innovation Center (RASTIC), teams will build and program robots to solve a surprise engineering challenge. This self-paced event emphasizes problem-solving, collaboration, and creativity.",
            img: "/Rastic25.JPG",
        },
        {
            title: "HackHardware x AIAA Drone Building Mini-Hackathon",
            date: "February 23, 2025 – One-Day Event",
            desc: "In collaboration with Boston University’s American Institute of Aeronautics and Astronautics (AIAA), students will design, prototype, and test drones in a fast-paced one-day hackathon. This event is beginner-friendly, offering opportunities for teamwork and hands-on learning.",
            img: "/AIAA.jpg",
        },
        {
            title: "HackHardware Fall 2024 Hackathon",
            date: "November 15–17, 2024 – Three-Day Hackathon",
            desc: "Our signature event brought students together for a video game–themed hackathon featuring software and three hardware tracks (beginner, intermediate, advanced). Participants designed original games, recreated multiplayer board games, built handheld consoles, and prototyped custom controllers.",
            img: "/Games.png",
        },
        {
            title: "HackHardware x RASTIC MiniHack",
            date: "April 5–6, 2024 – 24-Hour Hackathon",
            desc: "In partnership with RASTIC, we hosted a space-themed robotics hackathon where participants designed and programmed robots that combined art, science, and technology. The event was open to all majors and celebrated creativity in engineering.",
            img: "/RASTIC_Graphic.png",
        },
        {
            title: "KTP x HackHardware x BUILDS Hack Innovat3",
            date: "March 29–30, 2024 – Two-Day Hackathon",
            desc: "Together with Kappa Theta Pi’s Lambda Chapter and BUILDS, HackHardware organized a dynamic hackathon that blended software and hardware tracks. Teams of all skill levels collaborated on ambitious projects while fostering innovation, teamwork, and community.",
            img: "/Builds.png",
        },
        {
            title: "HackHardware TinyML Workshop",
            date: "February 23, 2024 – Workshop",
            desc: "Members explored Tiny Machine Learning (TinyML) using Arduino hardware and TensorFlow Lite Micro. Participants built real-time gesture recognition systems on the Arduino Nano 33 BLE Sense, gaining hands-on experience with cutting-edge AI tools.",
            img: "/ML.png",
        },
    ];

    return (
        <Page>
            {Array.from({ length: 15 }).map((_, i) => (
                <Particle
                    key={i}
                    top={Math.random() * 90}
                    left={Math.random() * 90}
                    size={Math.random() * 20 + 8}
                    delay={Math.random() * 3}
                />
            ))}

            <LogoWrapper>
                    <TitleText>Upcoming Events</TitleText>
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <EventCard style={{ width: "500px" }}>
                            <EventImage style={{ backgroundImage: "url('/HaS.png')", backgroundPosition: "center top" }} />
                            <EventContent>
                                <EventTitle>HackHardware Hack and Smash</EventTitle>
                                <EventDate>Semester Long Hackathon</EventDate>
                                <EventDescription>
                                    In collaboration with RASTIC, the semester long hackathon puts teams against each other to create fighting robots,
                                    in which teams will battle each other over several competition days.
                                </EventDescription>
                            </EventContent>
                        </EventCard>
                    </div>
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
                                <EventImage
                                    style={{
                                        backgroundImage: `url(${event.img})`,
                                        backgroundPosition: event.img === "/Rastic25.JPG" ? "center 20%" : event.img === "/AIAA.jpg" ? "center center" : "center top"
                                    }}
                                />
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
        </Page>


    );
}