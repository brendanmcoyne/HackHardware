import { styled } from "styled-components";

const FooterWrapper = styled.div`
    background-color: #006eaa;
    padding: 6px;
    margin-top: 40px;
`;

const FooterText = styled.p`
    text-align: center;
    color: white;
    
`;
export default function Footer() {
    return (
        <FooterWrapper>
            <FooterText>All Rights Reserved by HackHardware</FooterText>
        </FooterWrapper>
    );
}