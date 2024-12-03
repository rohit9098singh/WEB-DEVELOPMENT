import React, { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate(); // To handle navigation

  const { calculateSubtotal, calculateDiscount, discountPercentage } =
    useContext(StoreContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 gap-8">
      {/* Left Section: Delivery Form */}
      <form
        className="w-full md:w-2/3 bg-gray-100 p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl text-gray-800 font-semibold mb-6">
          Delivery Information
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-4 border border-gray-300 rounded-md px-4 py-2 outline-none"
          placeholder="Email"
        />
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="w-full mt-4 border border-gray-300 rounded-md px-4 py-2 outline-none"
          placeholder="Street Address"
        />
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="State"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Zip Code"
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Country"
          />
        </div>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-4 border border-gray-300 rounded-md px-4 py-2 outline-none"
          placeholder="Phone Number"
        />
      </form>

      {/* Price Details Sidebar */}
      <div className="price-details-container w-full lg:w-2/5 bg-white rounded-lg shadow p-8">
        <h3 className="text-lg font-bold mb-4">Price Details</h3>
        <div className="price-breakdown flex flex-col gap-4">
          <div className="flex justify-between">
            <p>
              Total MRP <span className="font-bold">:</span>
            </p>
            <p>₹{calculateSubtotal()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-green-600">
              Discount ({discountPercentage}%)<span className="font-bold">:</span>
            </p>
            <p className="text-green-600">-₹{calculateDiscount()}</p>
          </div>
          <div className="flex justify-between">
            <p>
              Delivery Charges <span className="font-bold">:</span>
            </p>
            <p>₹{calculateSubtotal() === 0 ? 0 : 20}</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <p>Total Amount</p>
            <p>
              ₹
              {(
                calculateSubtotal() +
                (calculateSubtotal() === 0 ? 0 : 20) -
                calculateDiscount()
              ).toFixed(2)}
            </p>
          </div>
        </div>
        {calculateSubtotal() > 0 && (
          <button
            onClick={() => navigate("/placeorder")}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
