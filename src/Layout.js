import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <Layouts>
            <Header />
            <>{children}</>
            <Footer />
        </Layouts>
    );
};

const Layouts = styled.div`
    width: 100%;
    min-width: 1050px;
    /* height: 100vh; */
    background-image: url("/img/background_msrh.png");
    background-repeat: no-repeat;
    background-size: cover;
`;

export default Layout;
