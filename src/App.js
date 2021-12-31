import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/login/Login";
import Layout from "./Layout";
import Main from "./Main";
import Facility from "./components/Facility";
import * as config from "./config";
import Auth from "./Auth";
import Profile from "./Profile";

function App() {
    const REST_API_KEY = `${config.KAKAO_RESTAPI_KEY}`;
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="login" element={<Login />} />
                        <Route
                            path="facilities/sports/:id"
                            element={<Facility />}
                        />
                        <Route
                            path="/oauth/kakao/callback"
                            element={<Auth />}
                        />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
