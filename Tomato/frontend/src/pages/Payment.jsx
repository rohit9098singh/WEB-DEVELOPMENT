import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const { cartItems, totalAmount, address } = state;

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(
        "http://localhost:5000/api/order/place",
        {
          userId: "12345", // Replace with actual userId from auth
          items: cartItems,
          amount: totalAmount,
          address,
        }
      );

      const { razorpayOrderId } = orderResponse.data;

      const options = {
        key: "RAZORPAY_ID_KEY", // Replace with Razorpay key
        amount: totalAmount * 100,
        currency: "INR",
        order_id: razorpayOrderId,
        handler: async (response) => {
          const verifyResponse = await axios.post(
            "http://localhost:5000/api/order/razorpay/verify",
            response
          );

          if (verifyResponse.data.success) {
            navigate("/confirmation", {
              state: { cartItems, totalAmount, address },
            });
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay ₹{totalAmount}</button>
    </div>
  );
};

export default Payment;
