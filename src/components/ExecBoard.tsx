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

const SectionText = styled(motion.p)`
    font-size: 1.1rem;
    margin: 3rem 0;
    max-width: 700px;
    color: #444;
    line-height: 1.6;
    text-align: center;
`;

const PhotoDiv = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
        gap: 15px;
    }
`;


const BoardMember = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img<{ shift?: string }>`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
    transform: ${({ shift }) => shift || "none"};

    &:hover {
        transform: scale(1.05) ${({ shift }) => shift || ""};
    }

    @media (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
`;


const Name = styled.h3`
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
`;

const Title = styled.p`
    margin: 0;
`;

const Class = styled.p`
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 10px;
`;

export default function ExecBoard() {
    const boardMembers = [
        { src: "eboard/Christian.JPG", name: "Christian Hanson", title: "President", cls: "Class of 2026", style: { objectPosition: "center top" } },
        { src: "eboard/Valerie.jpg", name: "Valerie Dam-Nguyen", title: "Vice President", cls: "Class of 2028" },
        { src: "eboard/Primah.jpeg", name: "Primah Muwanga", title: "Secretary", cls: "Class of 2026" },
        { src: "eboard/Brendan.jpg", name: "Brendan Coyne", title: "Treasurer", cls: "Class of 2026", style: { objectPosition: "center top" } },
        { src: "eboard/Evan.JPG", name: "Evan Leong", title: "Leadership Shadow", cls: "Class of 2028", style: { objectPosition: "center 20%" } },
        { src: "eboard/Elina.jpg", name: "Elina Wang", title: "Outreach & Marketing Liaison", cls: "Class of 2028", style: { objectPosition: "center 20%" } },
        { src: "eboard/Justin.png", name: "Justin Nascimento", title: "Technical Coordinator", cls: "Class of 2026" },
        { src: "eboard/Felipe.JPG", name: "Felipe Donati Chiara", title: "Technical Coordinator", cls: "Class of 2028" },
    ];

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
                    <TitleText>Meet the Executive Board!</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <SectionText
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Our Executive Board is a passionate team of student leaders dedicated to bridging the gap between
                hardware and software. Each member brings unique strengths—from technical expertise to outreach and
                organization—that help foster a supportive, innovative, and inclusive community. Get to know the
                people who make it all happen!
            </SectionText>

            <PhotoDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, staggerChildren: 0.2 }}
                viewport={{ once: true }}
            >
                {boardMembers.map((member, i) => (
                    <BoardMember
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <Image src={member.src} alt={member.name} />
                        <Name>{member.name}</Name>
                        <Title>{member.title}</Title>
                        <Class>{member.cls}</Class>
                    </BoardMember>
                ))}
            </PhotoDiv>
        </Page>
    );
}
