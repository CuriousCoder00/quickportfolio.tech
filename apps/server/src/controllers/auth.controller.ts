import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userLoginSchema, userSignupSchema } from "@repo/validators/user";
import { db } from "../lib/db";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = userSignupSchema.parse(req.body);
        const userExists = await db.user.findUnique({
            where: {
                email
            }
        });
        if (userExists) {
            res.status(409).json({ message: "User already exists" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = userLoginSchema.parse(req.body);
        const user = await db.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid password" });
            return;
        }
        const token = jwt.sign({
            id: user.id, email: user
                .email
        }, process.env.AUTH_SECRET as string, { expiresIn: "1h" });
        // set cookie

        res.cookie("qp_token", token, { httpOnly: true, sameSite: 'none', secure: true, }).status(200).json({ message: "Login successful", user, token });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const logoutUser = async (req: Request, res: Response) => {
    try {
        res.clearCookie("qp_token").status(200).json({ message: "Logout successful" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}