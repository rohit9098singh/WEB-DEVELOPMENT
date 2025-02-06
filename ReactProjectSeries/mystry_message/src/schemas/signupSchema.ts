import { z } from "zod";

// Username Validation
export const userValidation = z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not be greater than 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers");

// Signup Schema
export const signupSchema = z.object({
    username: userValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});
