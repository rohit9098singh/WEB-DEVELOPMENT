import express from "express";
import authenticate from "../middlewares/Auth.js"
import {placeOrder} from "..//controllers/orderController.js"

const orderRouter =express.Router();


orderRouter.post("/place",authenticate,placeOrder);

export default orderRouter;