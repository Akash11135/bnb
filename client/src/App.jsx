import { useState } from "react";
import IndexPage from "./pages/indexPage.jsx";
import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
