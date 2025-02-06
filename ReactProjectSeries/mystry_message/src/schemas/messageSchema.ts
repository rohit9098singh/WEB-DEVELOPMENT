import { z } from "zod";

export const MessageSchema = z.object({
    content:z
    .string()
    .min(10,{message:"Content must be at lease of 10 character"})
    .max(300,{message:"conetent must be less then 300 character "})
});