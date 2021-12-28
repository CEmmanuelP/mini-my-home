import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/login/Login";
import Sport from "./components/Sport";
import Layout from "./Layout";
import Main from "./Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="facilities/sports/:id" element={<Sport />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
