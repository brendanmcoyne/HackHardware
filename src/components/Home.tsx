import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 70px);
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
    position: relative;    /* IMPORTANT */
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        inset: 0;           /* shorthand for top:0; bottom:0; left:0; right:0 */
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;         /* above background but below content */
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

const Image = styled.img`
    display: block;
    margin: 0;
    padding: 0;
    max-width: 100%;
    width: 300px;
    height: auto;
    z-index: 2;
`;



export default function Home() {
    return (
        <>
            <LogoWrapper>
                <WrapperDiv>
                    <Image src="/HackHardware.png" alt="Logo" width={200} />
                    <TitleText>Welcome to HackHardware!</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <Page>
                <p>HackHardware is one of Boston University's top engineering clubs. We help to bridge the gap
                    between hardware and software engineering. We offer hands-on learning through our biweekly
                    meetings, guiding members in designing, prototyping, and programming engineering projects. Our
                    vision is to cultivate well-rounded engineers who can confidently tackle complex challenges in
                    all areas of engineering and science.
                </p>

                <p>Each semester, we host hackathons that challenge participants to bring innovative ideas to life
                    through collaborative, fast-paced engineering. These events are open to all experience levels and
                    provide a welcoming environment to learn new skills, explore creative solutions, and build real
                    hardware-software projects. From Arduino-based systems to Raspberry Pi integrations, our hackathons
                    are a hands-on combination of engineering, teamwork, and problem-solving.
                </p>
            </Page>
        </>
    );
}
