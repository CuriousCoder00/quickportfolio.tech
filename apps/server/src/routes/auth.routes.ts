import express from "express";
import { createUser } from "../controllers/auth.controller";
const userRoutes = express.Router();

userRoutes.post("/register", createUser);
userRoutes.post("/login", createUser);

export default userRoutes;