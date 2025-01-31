import * as z from "zod"

export const LoginSchema=z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    Password:z.string().min(6,{
        message:"Password is required"
    })
})
export const RegisterSchema=z.object({
    name:z.string().min(3,{
        message:"Name is Required"
    }),
    email:z.string().email({
        message:"Email is required"
    }),
    Password:z.string().min(6,{
        message:"minimum 6 charcter is required"
    })
})


