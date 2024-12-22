import express from "express";
import { createUser, loginUser } from "../controllers/auth.controller";
const userRoutes = express.Router();

userRoutes.post("/register", createUser);
userRoutes.post("/login", loginUser);

export default userRoutes;