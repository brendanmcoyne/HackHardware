import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface StyledListProps {
    open: boolean;
}

const StyledNavContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 11px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledBrand = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #006eaa;
`;

const StyledLink = styled.li`
    padding: 6px 14px;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
    position: relative;
    list-style: none;

    a {
        color: #006eaa;
        text-decoration: none;
        font-weight: bold;
        display: block;
        position: relative;
        transition: color 0.25s ease;

        /* === Animated underline effect === */
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 0%;
            height: 2px;
            background: #006eaa;
            transition: width 0.25s ease;
        }

        &:hover {
            color: #004f7a;
        }

        &:hover::after {
            width: 100%;
        }
    }

    @media (max-width: 1000px) {
        font-size: 0.9rem;
        padding: 10px;
        text-align: center;

        a::after {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const StyledList = styled.ul<StyledListProps>`
    list-style-type: none;
    display: flex;
    gap: 3px;
    padding: 0;
    margin: 0;
    align-items: center;

    @media (max-width: 1000px) {
        position: absolute;
        top: 60px;
        right: 0;
        background: #f5f5f5;
        flex-direction: column;
        width: 100%;
        max-height: ${({ open }) => (open ? "300px" : "0")};
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 6px 15px;
    box-sizing: border-box;
    flex-wrap: nowrap;
    align-items: center;
`;

const Hamburger = styled.button`
    background: none;
    border: none;
    color: #006eaa;
    cursor: pointer;
    display: none;

    @media (max-width: 1000px) {
        display: block;
    }
`;

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <StyledNavContainer>
            <StyledNav>
                <StyledBrand>HackHardware</StyledBrand>

                {/* Hamburger for mobile */}
                <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </Hamburger>

                <StyledList open={menuOpen}>
                    <StyledLink>
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/exec" onClick={() => setMenuOpen(false)}>
                            Executive Board
                        </Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/events" onClick={() => setMenuOpen(false)}>
                            Events
                        </Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/faq" onClick={() => setMenuOpen(false)}>
                            FAQ
                        </Link>
                    </StyledLink>
                </StyledList>
            </StyledNav>
        </StyledNavContainer>
    );
}
