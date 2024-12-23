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
            return res.status(409).json({ success: false, message: "User already exists" });

        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });
        return res.status(201).json({ success: true, message: "User created successfully", user });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
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
            return res.status(404).json({ success: false, message: "User not found" });

        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid password" });

        }
        const token = jwt.sign({
            id: user.id, email: user
                .email
        }, process.env.AUTH_SECRET as string, { expiresIn: "1h" });
        // set cookie

        return res.cookie("token", token, { httpOnly: true, sameSite: 'none', secure: true, }).status(200).json({ success: true, message: "Login successful", user, token });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const logoutUser = async (req: Request, res: Response) => {
    try {
        return res.clearCookie("qp_token").status(200).json({ message: "Logout successful" });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}