import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    creditBalance:{
      type:Number,
      required:true,
      default:5
    },
    },
);

// Check if the model is already compiled to prevent recompilation
const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;


