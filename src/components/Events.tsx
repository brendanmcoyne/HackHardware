import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const SectionText = styled.h2`
    font-weight: bold;
    font-size: 50px;
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

export default function Events() {
    return (
        <>
            <LogoWrapper>
                <WrapperDiv>
                    <TitleText>Upcoming Events</TitleText>
                </WrapperDiv>
            </LogoWrapper>

            <Page>
                <SectionText>Events</SectionText>
            </Page>
        </>


    );
}