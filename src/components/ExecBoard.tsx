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
`;

const Title = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`;

export default function ExecBoard() {
    return (
        <Page>
            <h2>Meet the Executive Board</h2>
            <PhotoDiv>
                <BoardMember>
                    <Image src="/Christian.JPG" alt={"Chris"} style={{ objectPosition: "center top" }}/>
                    <Name>Christian Hanson</Name>
                    <Title>President</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/Valerie.jpg" alt={"Valerie"} />
                    <Name>Valerie Dam-Nguyen</Name>
                    <Title>Vice President</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/Primah.jpeg" alt={"Primah"} />
                    <Name>Primah Muwanga</Name>
                    <Title>Secretary</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/Brendan.jpg" alt={"Brendan"} style={{ objectPosition: "center top" }}/>
                    <Name>Brendan Coyne</Name>
                    <Title>Treasurer</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/Evan.JPG" alt={"Evan"} />
                    <Name>Evan Leong</Name>
                    <Title>Leadership Shadow</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/HackHardware.png" alt={"Elina"} />
                    <Name>Elina Wang</Name>
                    <Title>Outreach & Marketing Liaison</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/Justin.png" alt={"Justin"} />
                    <Name>Justin Nascimento</Name>
                    <Title>Technical Coordinator</Title>
                </BoardMember>
                <BoardMember>
                    <Image src="/Felipe.JPG" alt={"Felipe"} />
                    <Name>Felipe Donati Chiara</Name>
                    <Title>Technical Coordinator</Title>
                </BoardMember>
            </PhotoDiv>
        </Page>

    );
}