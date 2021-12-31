import { Link } from "react-router-dom";
import styled from "styled-components";
import * as config from "./config";

const Header = ({ kakao }) => {
    const REST_API_KEY = `${config.KAKAO_RESTAPI_KEY}`;
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
                    <a href={KAKAO_AUTH_URL} className="login">
                        login
                    </a>
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
