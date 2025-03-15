import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./pages/AuthLayout";
import Login from "./pages/AuthLayout/Login.jsx";
import Register from "./pages/AuthLayout/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
