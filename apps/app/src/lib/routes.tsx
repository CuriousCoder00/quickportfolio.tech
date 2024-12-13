import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/register";
const Router = () => {
  return (
    <Routes>
      <Route index element={<div>Hello</div>} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
