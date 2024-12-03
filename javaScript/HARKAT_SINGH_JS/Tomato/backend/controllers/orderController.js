// import orderModel from "../models/orderModel";
// import userModel from "../models/userModel";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Placing user order from frontend
// const placeOrder = async (req, res) => {
//   const userId = req.userId; // Retrieved from the middleware
//   try {
//     // Step 1: Create a new order
//     const newOrder = new orderModel({
//       userId: userId, // User ID from middleware
//       items: req.body.items, // List of items in the order
//       amount: req.body.amount, // Total amount
//       address: req.body.address, // Shipping address
//     });

//     await newOrder.save();

//     // Step 2: Clear the user's cart
//     await userModel.findByIdAndUpdate(userId, { cartData: {} });

//     // Step 3: Create line items for Stripe
//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: item.name, // Product name
//         },
//         unit_amount: item.price * 100, // Price in the smallest currency unit (e.g., paise for INR)
//       },
//       quantity: item.quantity, // Quantity of the product
//     }));

//     // Step 4: Create a Stripe session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"], // Allow card payments
//       line_items: line_items,
//       mode: "payment", // Payment mode
//       success_url: `${process.env.FRONTEND_URL}/success`, // Redirect URL on success
//       cancel_url: `${process.env.FRONTEND_URL}/cancel`, // Redirect URL on cancel
//     });

//     // Step 5: Send the session URL to the frontend
//     res.status(200).json({ sessionUrl: session.url });
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ error: "Failed to place order" });
//   }
// };

// export { placeOrder };
