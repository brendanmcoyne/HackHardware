import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 700px;
    background-image: url('/circuits.jpg');
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
    transform: translateY(-85px);
    color: lightgray;
    z-index: 1;
`;

const LogoWrapperDiv = styled.div`
    position: relative;
    display: inline-block;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background: rgba(0, 123, 255, 0); 
        filter: blur(50px);
        z-index: -1;
        transition: background 0.3s ease, transform 0.3s ease;
    }

    &:hover::before {
        background: rgba(0, 123, 255, 0.4); 
        transform: translate(-50%, -50%) scale(1.1); 
    }
`;

const Image = styled.img`
    display: block;
    margin: 0;
    width: 300px;
    height: auto;
    z-index: 1;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const TextPassage = styled.p`
    max-width: 700px;
    font-size: 1.1rem;
`;

const LinkButton = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
`;

export default function Home() {
    return (
        <>
            <LogoWrapper>
                <WrapperDiv>
                    <LogoWrapperDiv>
                        <Image src="/HackHardware.png" alt="Logo" />
                    </LogoWrapperDiv>

                    <TitleText>Welcome to HackHardware!</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <Page style={{marginTop: "140px" }}>
                {/* About Section */}
                <TitleText style={{color: "black", marginBottom: "0"}}>About Us</TitleText>
                <TextPassage style={{marginTop: "0"}}>
                    HackHardware is one of Boston University's top engineering clubs. We help to bridge the gap
                    between hardware and software engineering. We offer hands-on learning through our biweekly
                    meetings, guiding members in designing, prototyping, and programming engineering projects. Our
                    vision is to cultivate well-rounded engineers who can confidently tackle complex challenges in
                    all areas of engineering and science.
                </TextPassage>

                <TextPassage>
                    Each semester, we host hackathons that challenge participants to bring innovative ideas to life
                    through collaborative, fast-paced engineering. These events are open to all experience levels and
                    provide a welcoming environment to learn new skills, explore creative solutions, and build real
                    hardware-software projects. From Arduino-based systems to Raspberry Pi integrations, our hackathons
                    are a hands-on combination of engineering, teamwork, and problem-solving.
                </TextPassage>

                {/* Sponsorship Section */}
                <TitleText style={{color: "black", marginTop: "100px", marginBottom: "0"}}>Sponsorship</TitleText>
                <TextPassage style={{marginTop: "0"}}>
                    HackHardware is made possible through the generous support of our sponsors. By partnering with us,
                    you’ll help foster the next generation of engineers and innovators at Boston University.
                    Sponsorship opportunities include event branding, direct student engagement, and more.
                </TextPassage>
                <LinkButton href="/HackHardwareSponsorship.pdf" target="_blank" rel="noopener noreferrer">
                    View Sponsorship Package
                </LinkButton>
            </Page>
        </>
    );
}
