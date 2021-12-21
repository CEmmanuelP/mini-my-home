import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <div
                style={{ display: "inline-block", color: "var(--color-green)" }}
            >
                Header
            </div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    border: 1px solid var(--color-primary);
    width: 100%;
    max-width: 1050px;
    height: 4rem;
    text-align: center;
    margin: 0 auto;
`;

export default Header;
