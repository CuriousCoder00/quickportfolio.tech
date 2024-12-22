import { Routes, Route } from "react-router";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/register";
import HomePage from "../pages/home";
const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
