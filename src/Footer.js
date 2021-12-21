import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <div>footer</div>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    border: 1px solid blue;
    height: 5rem;
    text-align: center;
    padding-top: 5rem;
`;

export default Footer;
