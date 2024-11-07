const { z } = require("zod");

// Define validation schema for signup data
const signupSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters long." }).max(30, { message: "First name cannot exceed 30 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters long." }).max(30, { message: "Last name cannot exceed 30 characters." }),
  email: z.string().email({ message: "Invalid email format." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
  confirmPassword: z.string(),
  image: z.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"]
});
// defined the validation schemafor login 
const loginSchema=z.object({
  email: z.string().email({ message: "Invalid email format." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
})

module.exports = {signupSchema,loginSchema};