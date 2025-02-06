import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // Correct import
import bcrypt from "bcryptjs";
import UserModel from "@/model/User";
import { User } from "next-auth"; // Import User type from next-auth
import { dbConnect } from "@/lib/dbConnect";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" }, // 
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        await dbConnect(); 

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const user = await UserModel.findOne({
            $or: [{ email }, { username: email }],
          });

          if (!user) {
            throw new Error(
              "User not found with the provided email or username"
            );
          }
          if(!user.isVerified){
            throw new Error("please verify your account first before login")
          }

          
          if (!(await bcrypt.compare(password, user.password))) {
            throw new Error("Incorrect password");
          }

         
          return {
            id: user.id.toString(),
            email: user.email,
          };
        } catch (error: any) {
          console.error("Error during authentication:", error);
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
};




