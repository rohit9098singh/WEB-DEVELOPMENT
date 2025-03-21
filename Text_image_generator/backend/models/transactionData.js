import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    userId: { type: String, required: true },
    plan: { type: String, required: true },
    amount: { type: Number, required: true },
    credit: { type: Number, required: true },
    payment: { type: Boolean, default: false },
    date: { type: Number }
  },
);

// Check if the model is already compiled to prevent recompilation
const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema);

export default transactionModel;
