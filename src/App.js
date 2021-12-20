import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout";
import Main from "./Main";

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
