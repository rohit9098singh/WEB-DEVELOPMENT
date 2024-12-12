import UserModel from "../models/userModel.js";
import axios from "axios";
import jwt from 'jsonwebtoken'; // Make sure this is in your file


export const generateImage = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from Authorization header
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized, no token provided" });
    }

    // Verify token and decode user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId =req.userId  ; 

    const user = await UserModel.findById(userId);
    const { prompt } = req.body;

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (!user.creditBalance || user.creditBalance <= 0) {
      return res.json({ success: false, message: "No credit balance", creditBalance: user.creditBalance || 0 });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        "x-api-key": process.env.CLIPDROP_API,
      },
      responseType: "arraybuffer",
    });

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await UserModel.findByIdAndUpdate(userId, { creditBalance: user.creditBalance - 1 });

    return res.json({
      success: true,
      message: "Image generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error("Error in generateImage:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
