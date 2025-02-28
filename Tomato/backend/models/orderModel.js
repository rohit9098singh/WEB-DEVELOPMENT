import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [{ type: Object, required: true }],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
  paid: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

const orderModel = mongoose.model("Order", orderSchema)

export default orderModel

