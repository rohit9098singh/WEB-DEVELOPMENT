import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } });
        return user; // Ensure you return the user object to use it elsewhere
    } catch (error) {
        return null; // Return null if there is an error
    }
};
export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });
        return user; // Ensure you return the user object to use it elsewhere
    } catch (error) {
        return null; // Return null if there is an error
    }
};
