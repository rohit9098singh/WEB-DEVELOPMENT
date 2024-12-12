import React, { useContext, useEffect } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditData, token, setShowLogin } =
    useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window.Razorpay === "undefined") {
      console.error("Razorpay SDK not loaded properly.");
    } else {
      console.log("Razorpay SDK loaded successfully.");
    }
  }, []);

  const initPay = async (order) => {
    const razorpayKey = import.meta.env.VITE_RAZORPAY_ID_KEY;
    if (!razorpayKey) {
      console.error("Razorpay key not set in environment variables.");
      toast.error("Payment gateway error. Please try again later.");
      return;
    }

    const options = {
      key: razorpayKey,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credit Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const verifyResponse = await axios.post(
            `${backendUrl}/api/user/verify-payment`,
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          toast.success("Payment verified successfully!");
        } catch (err) {
          console.error("Payment verification failed:", err?.response?.data || err.message);
          toast.error("Payment verification failed. Please contact support.");
        }
      },
      prefill: {
        name: user?.name || "",
        email: user?.email || "",
        contact: user?.contact || "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      toast.error("Payment failed. Please try again.");
    });
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        toast.info("Please log in to proceed with the payment.");
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/user/pay-razor`,
        { planId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error("Failed to create payment order. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error.response?.data || error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0.2, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="min-h-[35vh] text-center pt-8 mb-6 bg-gray-50"
      >
        <button className="border border-gray-400 px-10 py-2 rounded-lg hover:bg-gray-100 transition-all">
          Our Plans
        </button>
        <h1 className="text-center text-4xl font-bold mt-4 mb-4 sm:mb-6">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 text-lg">
          Select the best plan that fits your needs.
        </p>
      </motion.div>

      {/* Plans Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-lg border rounded-lg py-10 px-8 text-gray-600 hover:scale-105 hover:shadow-xl transition-transform duration-500 max-w-sm"
          >
            {/* Icon */}
            <img
              src={assets.logo_icon}
              alt="Plan Icon"
              width={40}
              className="mx-auto mb-4"
            />

            {/* Plan Details */}
            <p className="mt-2 mb-1 font-semibold text-center text-xl text-gray-800">
              {item.id}
            </p>
            <p className="text-sm text-center text-gray-500">{item.desc}</p>

            {/* Price and Credits */}
            <div className="mt-4 text-center">
              <span className="text-3xl font-semibold text-gray-800">
                ${item.price}
              </span>
              <span className="text-gray-500"> / {item.credits} credits</span>
              <button
                onClick={() => {
                  paymentRazorpay(item.id);
                }}
                className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
              >
                {user ? "Purchase" : "Get Started"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuyCredit;
