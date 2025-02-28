import orderModel from "../models/orderModel.js";

// Place a new order
const placeOrder = async (req, res) => {
    try {
      console.log("Placing Order:", req.body)
  
      const { userId, items, totalAmount } = req.body
  
      if (!userId) {
        return res.status(400).json({ success: false, message: "User ID is required" })
      }
  
      if (!items || items.length === 0) {
        return res.json({
          success: false,
          message: "Order must contain at least one item.",
        })
      }
  
      const newOrder = new orderModel({
        userId,
        items,
        totalAmount,
        status: "Pending",
        paid: false,
        createdAt: new Date(),
      })
  
      await newOrder.save()
  
      res.json({ success: true, message: "Order placed successfully", orderId: newOrder._id })
    } catch (error) {
      console.error("Error placing order:", error)
      res.status(500).json({ success: false, message: "Error placing order", error: error.message })
    }
  }
  
  

// Get user-specific orders
const getUserOrders = async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const orders = await orderModel.find({ userId });

        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error fetching orders", error: error.message });
    }
};

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error fetching orders", error: error.message });
    }
};

// Get order by ID
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orderModel.findById(id);

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        res.json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch order", error: error.message });
    }
};

export { placeOrder, getUserOrders, getAllOrders, getOrderById };
