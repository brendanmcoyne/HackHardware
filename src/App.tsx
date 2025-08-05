import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import ExecBoard from "./components/ExecBoard.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";

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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exec" element={<Content><ExecBoard /></Content>} />
                    <Route path="/contact" element={<Content><Contact /></Content>} />
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
