import express from "express";
import { userSignup } from "../controllers/user.controllers";
const userRoutes = express.Router();

userRoutes.post("/signup", userSignup);

export default userRoutes;