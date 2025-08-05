import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 70px); /* subtract navbar height */
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

export default function Home() {
    return (
        <Page>
            <div>
                <Image src="/HackHardware.png" alt="Logo" width={200} />
            </div>
            <h2>Welcome to HackHardware!</h2>
        </Page>
    );
}
