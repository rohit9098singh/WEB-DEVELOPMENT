import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const { state } = useLocation();
  const { cartItems, totalAmount, address } = state;

  return (
    <div>
      <h1>Order Confirmed!</h1>
      <h2>Items:</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h2>Total: ₹{totalAmount}</h2>
      <h2>Delivery Address:</h2>
      <p>{address.street}, {address.city}, {address.postalCode}</p>
    </div>
  );
};

export default ConfirmationPage;
