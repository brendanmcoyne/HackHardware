import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavContainer = styled.div`
    width: 100%;     
    margin: 0 auto;
    position: fixed;         
    top: 0;                 
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 6px;
    background-color: #006eaa;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 6px 15px;
    box-sizing: border-box;
    flex-wrap: nowrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding: 6px 10px;
        gap: 0; 
    }
`;

const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap; /* no wrapping, keep all in one line */
    gap: 3px;
    padding: 0;
    margin: 0;
    overflow-x: hidden; /* prevent horizontal scroll */

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1000px) {
        justify-content: center;
        width: 100%;
        flex-wrap: wrap; /* allow wrapping on small screens */
        overflow-x: visible;
    }
`;


const StyledLink = styled.li`
    padding: 6px 14px;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
    text-align: right;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        height: 100%;
        &:hover {
            text-decoration: underline;
        }
    }
    @media (max-width: 1000px) {
        font-size: 0.7rem;
        padding: 4px 8px;
    }
`;

const StyledBrand = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    align-self: center;

    @media (max-width: 1000px) {
        margin-bottom: 0.5rem;
    }
`;

export default function Nav() {
    return (
        <StyledNavContainer>
            <StyledNav>
                <StyledBrand>HackHardware</StyledBrand>
                <StyledList>
                    <StyledLink><Link to="/">Home</Link></StyledLink>
                    <StyledLink><Link to="/exec">Executive Board</Link></StyledLink>
                    <StyledLink><Link to="/contact">Contact</Link></StyledLink>
                    <StyledLink><Link to="/archives">Archives</Link></StyledLink>
                    <StyledLink><Link to="/season">Season</Link></StyledLink>
                    <StyledLink><Link to="/headlines">Headlines</Link></StyledLink>
                </StyledList>
            </StyledNav>
        </StyledNavContainer>
    );
}