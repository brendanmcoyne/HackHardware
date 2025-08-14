import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import ExecBoard from "./components/ExecBoard.tsx";
import Events from "./components/Events.tsx";
import Contact from "./components/Contact.tsx";
import FAQ from "./components/FAQ.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px; /* adjust based on navbar height */
`;

function Root() {
    return (
        <>
            <Nav />
            <MainWrapper>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exec" element={<Content><ExecBoard /></Content>} />
                    <Route path="/events" element={<Content><Events/></Content>} />
                    <Route path="/contact" element={<Content><Contact /></Content>} />
                    <Route path="/faq" element={<Content><FAQ /></Content>} />
                </Routes>
            </MainWrapper>
            <Footer/>
        </>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}
