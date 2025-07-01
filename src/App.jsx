import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./EMS/LoginPage";
import Pages from "./EMS/RegisterPage";
import DashboardPage from "./EMS/Dashboard/components/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
