const { z } = require("zod");

// Define validation schema for signup data
const signupSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  image: z.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"]
});

// Define validation schema for login data
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Define validation schema for product data
const ProductSchema = z.object({
  name: z.string().min(1).max(100),
  category: z.enum(["Fruits", "Vegetables", "Icecream", "Pizza","Rice","Cake","Burger","Sandwitch","Chicken","Idly_Dosa","Paneer"]),
  image: z.string().optional(),
  price: z.number().min(0),
  description: z.string(),
});

module.exports = { signupSchema, loginSchema, ProductSchema };
