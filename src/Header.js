import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Link
        style={{
          display: "inline-block",
          color: "var(--color-green)",
          fontSize: "2rem",
          textDecoration: "none",
        }}
        to="/"
      >
        Header
      </Link>
      <div className="category">
        <div className="Login">
          <Link to="login" className="login">
            login
          </Link>
        </div>
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

  .category {
    display: flex;
    justify-content: right;

    .login {
      font-weight: 600;
      font-size: 0.7rem;
    }
  }
`;

export default Header;
