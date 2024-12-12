import express from "express"
// Correct import path
import { generateImage } from "../controllers/imageController.js";
import authenticate from "../middlewares/Auth.js";

const imageRouter=express.Router();

imageRouter.post("/generateimage",authenticate,generateImage);

export default imageRouter