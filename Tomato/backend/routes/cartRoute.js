import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartControllers.js";
import authMiddleware from "../middlewares/Auth.js"; 

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.get("/get", authMiddleware, getCart);

export default cartRouter;
