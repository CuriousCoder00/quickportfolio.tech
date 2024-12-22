import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string;
    email: string;
}

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            res.status(401).json({ message: "Unauthorized: Token missing" });
            return
        }
        const decoded = jwt.verify(token, process.env.AUTH_SECRET as string) as JwtPayload;
        req.user = {
            id: decoded.id,
            email: decoded.email
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
        return
    }
};