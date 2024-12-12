import { z } from "zod";

export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const userSignupSchema = z.object({
    name: z.string().min(6, "Name must be at least 6 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
})

export type UserLoginInput = z.infer<typeof userLoginSchema>
export type UserSignupInput = z.infer<typeof userSignupSchema>