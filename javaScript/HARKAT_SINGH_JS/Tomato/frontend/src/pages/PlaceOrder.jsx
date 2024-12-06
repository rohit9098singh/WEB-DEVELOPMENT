import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { calculateSubtotal, calculateDiscount, discountPercentage } = useContext(StoreContext);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate(); // To handle navigation

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // You can store the data in context or perform actions before redirecting
    navigate("/payment"); // Redirect to the payment page
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 gap-8">
      {/* Left Section: Delivery Form */}
      <form
        className="w-full md:w-2/3 bg-gray-100 p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-2xl text-gray-800 font-semibold mb-6">
          Delivery Information
        </p>

        {/* Input fields */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            {...register("firstName", { required: "First Name is required" })}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="First Name"
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}

          <input
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Last Name"
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
        </div>

        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full mt-4 border border-gray-300 rounded-md px-4 py-2 outline-none"
          placeholder="Email"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <input
          type="text"
          {...register("street", { required: "Street Address is required" })}
          className="w-full mt-4 border border-gray-300 rounded-md px-4 py-2 outline-none"
          placeholder="Street Address"
        />
        {errors.street && <span className="text-red-500">{errors.street.message}</span>}

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="City"
          />
          {errors.city && <span className="text-red-500">{errors.city.message}</span>}

          <input
            type="text"
            {...register("state", { required: "State is required" })}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="State"
          />
          {errors.state && <span className="text-red-500">{errors.state.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <input
            type="text"
            {...register("zipCode", { required: "Zip Code is required" })}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Zip Code"
          />
          {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}

          <input
            type="text"
            {...register("country", { required: "Country is required" })}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Country"
          />
          {errors.country && <span className="text-red-500">{errors.country.message}</span>}
        </div>

        <input
          type="text"
          {...register("phone", { required: "Phone Number is required" })}
          className="w-full mt-4 border border-gray-300 rounded-md px-4 py-2 outline-none"
          placeholder="Phone Number"
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}

        {/* Deliver Here Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Deliver Here
        </button>
      </form>

      {/* Price Details Sidebar */}
      <div className="price-details-container w-full lg:w-2/5 bg-white rounded-lg shadow p-8">
        <h3 className="text-lg font-bold mb-4">Price Details</h3>
        <div className="price-breakdown flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Total MRP:</p>
            <p>₹{calculateSubtotal()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-green-600">
              Discount ({discountPercentage}%):
            </p>
            <p className="text-green-600">-₹{calculateDiscount()}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Charges:</p>
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
      </div>
    </div>
  );
};

export default PlaceOrder;
