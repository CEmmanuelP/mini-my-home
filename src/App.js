import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/login/Login";
import Layout from "./Layout";
import Main from "./Main";
import Facility from "./components/Facility";

function App() {
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
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
