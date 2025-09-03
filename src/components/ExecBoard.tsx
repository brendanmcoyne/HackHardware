import styled from "styled-components";
import { motion } from "framer-motion";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const PhotoDiv = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    background-color: #e6e6e5;
    border-radius: 8px;
    padding: 14px;
`;

const BoardMember = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
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

const SectionText = styled(motion.p)`
    font-size: 1.1rem;
    margin: 4rem 0;
    max-width: 700px;
    color: #444;
    line-height: 1.6;
    text-align: center;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 700px;
    background-image: url('/CandJ.jpg');
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

export default function ExecBoard() {
    return (
        <>
            <LogoWrapper>
                <WrapperDiv>
                    <TitleText>Meet the Executive Board!</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <Page>
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
                    {[
                        { src: "/Christian.JPG", name: "Christian Hanson", title: "President", cls: "Class of 2026", style: { objectPosition: "center top" } },
                        { src: "/Valerie.jpg", name: "Valerie Dam-Nguyen", title: "Vice President", cls: "Class of 2028" },
                        { src: "/Primah.jpeg", name: "Primah Muwanga", title: "Secretary", cls: "Class of 2026" },
                        { src: "/Brendan.jpg", name: "Brendan Coyne", title: "Treasurer", cls: "Class of 2026", style: { objectPosition: "center top" } },
                        { src: "/Evan.JPG", name: "Evan Leong", title: "Leadership Shadow", cls: "Class of 2028", style: { objectPosition: "center 20%" } },
                        { src: "/Elina.jpg", name: "Elina Wang", title: "Outreach & Marketing Liaison", cls: "Class of 2028", style: { objectPosition: "center 20%" } },
                        { src: "/Justin.png", name: "Justin Nascimento", title: "Technical Coordinator", cls: "Class of 2026" },
                        { src: "/Felipe.JPG", name: "Felipe Donati Chiara", title: "Technical Coordinator", cls: "Class of 2028" },
                    ].map((member, i) => (
                        <BoardMember
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <Image src={member.src} alt={member.name} style={member.style || {}} />
                            <Name>{member.name}</Name>
                            <Title>{member.title}</Title>
                            <Class>{member.cls}</Class>
                        </BoardMember>
                    ))}
                </PhotoDiv>
            </Page>
        </>
    );
}
