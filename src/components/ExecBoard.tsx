import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const PhotoDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #e6e6e5;
    border-radius: 8px;
    padding: 14px;
`;

const BoardMember = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px; /* optional: rounded corners */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); /* optional: subtle shadow */
    margin-bottom: 0.5rem;
`;

const Name = styled.h3`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`;

const Title = styled.p`
    margin: 0;
`;

const Class = styled.p`
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 10px;
`;

const TextSection = styled.p`
    max-width: 500px;
    margin-bottom: 40px;
    background-color: #006eaa;
    border-radius: 8px;
    color: white;
    padding: 20px;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
`;

const SectionText = styled.h2`
    font-weight: bold;
    font-size: 50px;
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
                <SectionText>Meet the Executive Board!</SectionText>
                <TextSection>Our Executive Board is a passionate team of student leaders dedicated to bridging the gap between
                    hardware and software. Each member brings unique strengths—from technical expertise to outreach and
                    organization—that help foster a supportive, innovative, and inclusive community. Get to know the
                    people who make it all happen!</TextSection>
                <PhotoDiv>
                    <BoardMember>
                        <Image src="/Christian.JPG" alt={"Chris"} style={{ objectPosition: "center top" }}/>
                        <Name>Christian Hanson</Name>
                        <Title>President</Title>
                        <Class>Class of 2026</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Valerie.jpg" alt={"Valerie"} />
                        <Name>Valerie Dam-Nguyen</Name>
                        <Title>Vice President</Title>
                        <Class>Class of 2028</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Primah.jpeg" alt={"Primah"} />
                        <Name>Primah Muwanga</Name>
                        <Title>Secretary</Title>
                        <Class>Class of 2026</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Brendan.jpg" alt={"Brendan"} style={{ objectPosition: "center top" }}/>
                        <Name>Brendan Coyne</Name>
                        <Title>Treasurer</Title>
                        <Class>Class of 2026</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Evan.JPG" alt={"Evan"} style={{ objectPosition: "center 20%" }} />
                        <Name>Evan Leong</Name>
                        <Title>Leadership Shadow</Title>
                        <Class>Class of 2028</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Elina.jpg" alt={"Elina"} style={{ objectPosition: "center 20%" }} />
                        <Name>Elina Wang</Name>
                        <Title>Outreach & Marketing Liaison</Title>
                        <Class>Class of 2028</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Justin.png" alt={"Justin"} />
                        <Name>Justin Nascimento</Name>
                        <Title>Technical Coordinator</Title>
                        <Class>Class of 2026</Class>
                    </BoardMember>
                    <BoardMember>
                        <Image src="/Felipe.JPG" alt={"Felipe"} />
                        <Name>Felipe Donati Chiara</Name>
                        <Title>Technical Coordinator</Title>
                        <Class>Class of 2028</Class>
                    </BoardMember>
                </PhotoDiv>
            </Page>
        </>


    );
}