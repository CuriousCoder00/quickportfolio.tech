import { Request, Response } from "express";
import { db } from "../lib/db";

export const userSignup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await db.user.create({
            data: {
                name,
                email,
                password
            }
        });
        res.json(user);
        console.log("Login successful");
    } catch (error: any) {
        console.log("Error: ", error.message);
    }
}