import * as z from "zod"

export const loginSchema=z.object({
    email:z.string().email(),
    Password:z.string()
})

export const registerSchema