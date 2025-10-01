import { styled } from "styled-components";

const FooterWrapper = styled.footer`
    background-color: #005c99; /* slightly darker than brand blue */
    padding: 2rem 1rem;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const FooterText = styled.p`
    color: white;
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  a {
    color: #aeefff; /* lighter accent color */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterText>All Rights Reserved by HackHardware</FooterText>
            <FooterLinks>
                <a href="https://www.instagram.com/hackhardware_bu/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://www.instagram.com/hackhardware_bu/" target="_blank" rel="noopener noreferrer">
                    Discord
                </a>
                <a href="https://www.instagram.com/hackhardware_bu/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </FooterLinks>
        </FooterWrapper>
    );
}
