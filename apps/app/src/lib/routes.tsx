import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
