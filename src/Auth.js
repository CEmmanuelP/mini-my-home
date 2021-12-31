import axios from "axios";
import { useNavigate } from "react-router";
import * as config from "./config";
import qs from "qs";
import { useEffect } from "react";

const Auth = () => {
    const REST_API_KEY = config.KAKAO_RESTAPI_KEY;
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const CLIENT_SECRET = config.KAKAO_SECRET_CLIENT;
    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");

    const navigate = useNavigate();

    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
        });
        try {
            // access token 가져오기
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            );

            // Kakao Javascript SDK 초기화
            window.Kakao.init(REST_API_KEY);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            navigate("/profile", { replace: true });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getToken();
    }, []);
    return null;
};

export default Auth;
