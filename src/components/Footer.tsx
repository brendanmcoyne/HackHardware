import { styled } from "styled-components";

const FooterWrapper = styled.footer`
    background: linear-gradient(180deg, #006bb3 0%, #004d80 100%);
    padding: 2.5rem 1rem;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-top: 3px solid #00bfff;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        padding: 2rem 3rem;
    }
`;

const FooterText = styled.p`
    color: #e0f7ff;
    font-size: 0.95rem;
    margin: 0;
    opacity: 0.9;
    line-height: 1; 
    display: flex;
    align-items: center; 
    height: 100%; 
`;

const FooterLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 

    a {
        color: #aeefff;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        position: relative;
        transition: color 0.25s ease;

        &:hover {
            color: #ffffff;
        }

        &:after {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 2px;
            background: #ffffff;
            transition: width 0.25s ease;
        }
        &:hover:after {
            width: 100%;
        }
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterText>
                © {new Date().getFullYear()} HackHardware — All Rights Reserved
            </FooterText>
            <FooterLinks>
                <a
                    href="https://www.instagram.com/hackhardware_bu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <a
                    href="https://discord.com/invite/GdEPmEC8bU"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord
                </a>
                <a
                    href="https://www.linkedin.com/company/hackhardware-bu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </FooterLinks>
        </FooterWrapper>
    );
}
