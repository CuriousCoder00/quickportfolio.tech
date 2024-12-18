import express from "express";
import { createUser } from "../controllers/auth.controller";
const userRoutes = express.Router();

userRoutes.post("/register", createUser);

export default userRoutes;