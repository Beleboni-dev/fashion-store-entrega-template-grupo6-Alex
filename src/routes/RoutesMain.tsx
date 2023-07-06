import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { AdminPage } from "../pages/AdminPage";

export const RoutesMain = () => {
    return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/product/:name" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    );
}