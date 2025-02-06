"use server";
import bcrypt from "bcrypt";
import * as z from "zod";
import { db } from "@/lib/db"; // Assuming Prisma client is set up here
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

// Register function
export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // Validate the input using the RegisterSchema
    const validatedFields = RegisterSchema.safeParse(values);

    // If validation fails, return an error
    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    // Destructure the validated data
    const { Password, email, name } = validatedFields.data;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(Password, 10);

    try {
        // Check if the user already exists in the database using Prisma
        const existingUser = await getUserByEmail(email)

        // If the email is already in use, return an error
        if (existingUser) {
            return { error: "Email already in use" };
        }

        // Create a new user in the database
        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Return success message
        return { success: "User registered successfully" };

    } catch (error) {
        // Catch and log any errors during the process
        console.error("Error during user registration:", error);
        return { error: "An error occurred while registering the user" };
    }
};
