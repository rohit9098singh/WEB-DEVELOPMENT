import React, { useContext, useState } from "react";
import { MoveLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Payment = () => {
    const { cartItem } = useContext(StoreContext);
    const navigate = useNavigate();
    const [activePaymentMethod, setActivePaymentMethod] = useState(null);
    
    const totalCost = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handlePaymentSelection = (method) => {
        setActivePaymentMethod(method);
    };

    const onPlaceOrder = async () => {
        if (!activePaymentMethod) {
            toast.error("Please select a payment method.");
            return;
        }

        if (cartItem.length === 0) {
            toast.error("Your cartItem is empty.");
            return;
        }

        try {
            const url = "http://localhost:3005/api/placeOrder";
            const payload = {
                userId: localStorage.getItem("userId"),
                items: cartItem.map(({ name, price, quantity, image }) => ({ name, price, quantity, image })),
                totalAmount: totalCost,
            };

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message);
                navigate("/order-success");
                localStorage.removeItem("cartItem");
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("An error occurred while placing the order. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-gray-100 flex flex-col md:flex-row justify-around px-4 md:px-12 gap-6 h-screen">
            <div className="w-full lg:w-3/5 bg-white p-8 mt-4 shadow-lg rounded-lg h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Delivery Address</h2>
                <div className="flex flex-col gap-2">
                    {["Wallet", "Net Banking or UPI", "Cash On Delivery", "Pay Through EMI"].map((method) => (
                        <div key={method}>
                            <div className="flex items-center border h-16 rounded-lg px-4">
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method}
                                    id={method.toLowerCase().replace(/ /g, "")}
                                    onClick={() => handlePaymentSelection(method)}
                                    className="mr-2"
                                />
                                <label htmlFor={method.toLowerCase().replace(/ /g, "")} className="cursor-pointer">
                                    {method}
                                </label>
                            </div>
                            {activePaymentMethod === method && (
                                <div className="mt-4 p-4 bg-gray-50 border rounded">
                                    {method === "Cash On Delivery" ? (
                                        <p className="text-green-700">Cash will be collected at the time of delivery.</p>
                                    ) : (
                                        <input
                                            type="text"
                                            placeholder={`Enter ${method} Details`}
                                            className="w-full mt-2 p-2 border border-black rounded"
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    onClick={onPlaceOrder}
                    className="bg-slate-900 text-white font-semibold text-lg px-4 py-2 w-full mt-4 rounded-lg"
                >
                    Confirm Order
                </button>
            </div>

            <div className="w-full md:w-[35%] mt-6 lg:mt-0 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                    <h2 className="text-lg font-bold text-slate-500 border-b pb-2">PRICE DETAILS</h2>
                    <div className="flex justify-between py-2">
                        <p>MRP</p>
                        <p>{totalCost}</p>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <p>Delivery Fee</p>
                        <p className="text-green-600">{totalCost > 100 ? "Free" : "20"}</p>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className="text-lg font-bold">Total Amount</p>
                        <p className="font-semibold">{totalCost > 100 ? totalCost : totalCost + 20}</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md mt-6 p-4 text-center">
                    <p className="text-lg text-slate-500 flex">
                        <ShieldCheck size={44} /> Save and Secure Payment. Easy return. 100% Authentic products
                    </p>
                    <div
                        className="flex items-center justify-center gap-2 text-green-600 cursor-pointer mt-2"
                        onClick={() => navigate("/cartItem/address")}
                    >
                        <MoveLeft />
                        <h2>Go Back</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;