import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login";
const Router = () => {
  return (
    <Routes>
      <Route index element={<div>Hello</div>} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
