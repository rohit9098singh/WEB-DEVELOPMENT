import express from "express";
import cors from "cors";
import mongoDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT


console.log("your port ",PORT);


// Middlewares
app.use(express.json());
app.use(cors());

// db connection 
mongoDb();


// api end points 
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
// app.use("/api/order",orderRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
