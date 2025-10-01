import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 2rem 1rem;
    background: radial-gradient(circle at top, #e0f7ff 0%, #f5f5f5 100%);
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

const LogoWrapperDiv = styled.div`
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        filter: blur(60px);
        z-index: -1;
        transition: all 0.3s ease;
    }

    &::before {
        width: 400px;
        height: 400px;
        background: rgba(0, 123, 255, 0.2);
        transform: translate(-50%, -50%);
    }

    &::after {
        width: 250px;
        height: 250px;
        background: rgba(0, 200, 255, 0.15);
        transform: translate(-50%, -50%);
    }

    &:hover::before {
        transform: translate(-50%, -50%) scale(1.1);
        background: rgba(0, 123, 255, 0.4);
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1.2);
        background: rgba(0, 200, 255, 0.25);
    }
`;

const LogoImage = styled.img`
    display: block;
    width: 400px;
    height: auto;
    margin: 0;
    padding: 0;
    z-index: 1;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 20px rgba(0, 123, 255, 0.5));
    }
`;

const TitleText = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #006eaa;
    margin-top: -100px;
    background: linear-gradient(135deg, #007bff, #00c8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 2px 6px rgba(0, 123, 255, 0.2);
    text-align: center;
`;

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    position: relative;
    width: 100%;
    height: 600px;
`;

const SectionTitle = styled.h3`
    font-weight: bold;
    font-size: 3rem;
    margin: 4rem 0 1rem;
    color: #222;
`;

const TextPassage = styled(motion.p)`
    max-width: 700px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #444;
    margin: 1rem 0;
`;

const LinkButton = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 12px 28px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #007bff, #0056b3);
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 15px rgba(0, 91, 187, 0.4);
        color: white;
    }
`;


const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1500px;
    margin: 4rem auto;
    overflow: visible; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarouselTrack = styled(motion.div)`
    display: flex;
    gap: 2rem;
    will-change: transform;
`;

const CarouselImage = styled(motion.img)`
    width: 450px;
    max-width: 90vw;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
    flex-shrink: 0;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;
    transform-origin: center center; 

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 20px rgba(0,123,255,0.5));
    }
`;


const ArrowButton = styled.button<{ left?: boolean }>`
    position: absolute;
    top: 50%;
    ${({ left }) => (left ? 'left: 100px;' : 'right: 100px;')} 
    transform: translateY(-50%);
    background: #006eaa;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 70px;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(0, 123, 255, 1);
    }
`;

const BottomImageWrapper = styled.div`
    width: 80%;
    max-width: 1000px;
    height: 500px;          
    overflow: hidden;        
    margin: 4rem 0 2rem;
    border-radius: 12px;     
    box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
`;

const BottomImage = styled.img`
  width: 100%;
  height: auto;
  transform: translateY(-170px);  
  object-fit: cover;            
`;



const imageList = [
    "/IMG_4751.jpg",
    "/IMG_4763.jpg",
    "/IMG_4778.jpg",
    "/IMG_4675.jpg",
    "/IMG_4700.jpg",
    "/IMG_1467.jpg",
    "/IMG_1476.jpg",
    "/NIK07607.JPG",
];

export default function Home() {

    const imagesPerSlide = 2;
    const totalSlides = Math.ceil(imageList.length / imagesPerSlide);
    const [slideIndex, setSlideIndex] = useState(0);

    const next = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
    const prev = () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

    const currentImages = imageList.slice(
        slideIndex * imagesPerSlide,
        slideIndex * imagesPerSlide + imagesPerSlide
    );


    return (
        <Page>
            <LogoSection>
                {Array.from({ length: 15 }).map((_, i) => (
                    <Particle
                        key={i}
                        top={Math.random() * 95}
                        left={Math.random() * 95}
                        size={Math.random() * 25 + 8}
                        delay={Math.random() * 4}
                    />
                ))}

                <LogoWrapperDiv>
                    <LogoImage src="/HackHardware.png" alt="Logo" />
                </LogoWrapperDiv>

                <TitleText>Welcome to HackHardware!</TitleText>
            </LogoSection>

            <SectionTitle>About Us</SectionTitle>
            <TextPassage
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                HackHardware is one of Boston University's top engineering clubs. We help to bridge the gap
                between hardware and software engineering. We offer hands-on learning through our biweekly
                meetings, guiding members in designing, prototyping, and programming engineering projects. Our
                vision is to cultivate well-rounded engineers who can confidently tackle complex challenges in
                all areas of engineering and science.
            </TextPassage>

            <TextPassage
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Each semester, we host hackathons that challenge participants to bring innovative ideas to life
                through collaborative, fast-paced engineering. These events are open to all experience levels and
                provide a welcoming environment to learn new skills, explore creative solutions, and build real
                hardware-software projects. From Arduino-based systems to Raspberry Pi integrations, our hackathons
                are a hands-on combination of engineering, teamwork, and problem-solving.
            </TextPassage>

            <SectionTitle>Our Projects</SectionTitle>
            <CarouselContainer>
                <ArrowButton left onClick={prev}>&lt;</ArrowButton>
                <ArrowButton onClick={next}>&gt;</ArrowButton>

                <CarouselTrack
                    key={slideIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                    {currentImages.map((src, i) => (
                        <CarouselImage key={i} src={src} alt={`Project ${slideIndex * imagesPerSlide + i + 1}`} />
                    ))}
                </CarouselTrack>
            </CarouselContainer>


            <SectionTitle style={{marginTop: "0"}}>Sponsorship</SectionTitle>
            <TextPassage
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                HackHardware is made possible through the generous support of our sponsors. By partnering with us,
                you’ll help foster the next generation of engineers and innovators at Boston University.
                Sponsorship opportunities include event branding, direct student engagement, and more.
            </TextPassage>

            <LinkButton href="/HackHardwareSponsorship.pdf" target="_blank" rel="noopener noreferrer">
                View Sponsorship Package
            </LinkButton>

            <SectionTitle>Contact Us!</SectionTitle>
            <TextPassage
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Interested in joining the E-board next year? Have any ideas for events? Have any other questions that
                you want answered regarding events, tracks, or opportunities? Feel free to contact us, and one of our
                e-board members will get back to you! We look forward to hearing from you!
            </TextPassage>

            <LinkButton href="/contact">Contact Form</LinkButton>

            <BottomImageWrapper>
                <BottomImage src="/IMG_1495.jpg" alt="Bottom Page Image" />
            </BottomImageWrapper>
        </Page>
    );
}
