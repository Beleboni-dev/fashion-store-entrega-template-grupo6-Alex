import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { AdminPage } from "../pages/AdminPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { TesteRoutes } from "./RotasTeste";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/product/:name" element={<ProductPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/adminpage" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};
