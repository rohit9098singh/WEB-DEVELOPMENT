import express from "express"
import {placeOrder,getAllOrders,getOrderById,getUserOrders} from "../controllers/orderController.js"
import authenticate from "../middlewares/Auth.js";

const orderRouter =express.Router();

orderRouter.post("/placeOrder",placeOrder);
orderRouter.post("/order-list",authenticate,getUserOrders);
orderRouter.post("/all-orders",getAllOrders);
orderRouter.post("/order/:id",authenticate,getOrderById);

export default orderRouter;

