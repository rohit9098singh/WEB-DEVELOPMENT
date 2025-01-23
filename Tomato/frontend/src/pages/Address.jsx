import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { food_list } from "../assets/frontend_assets/assets";

const PlaceOrder = () => {
  const { calculateSubtotal, calculateDiscount, discountPercentage, cartItems } = useContext(StoreContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Form submission handler
  const onSubmit = (formData) => {
    console.log("Form submitted:", formData);
    navigate("/payment");
  };

  // Render input fields with error handling
  const renderInput = (name, placeholder, type = "text", validation = {}) => (
    <div className="w-full">
      <input
        type={type}
        {...register(name, validation)}
        className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full"
        placeholder={placeholder}
      />
      {errors[name] && <span className="text-red-500">{errors[name].message}</span>}
    </div>
  );

  // Calculate delivery charges
  const deliveryCharges = calculateSubtotal() === 0 ? 0 : 20;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 gap-8">
      {/* Left Section: Delivery Form */}
      <form
        className="w-full md:w-2/3 bg-gray-100 p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-2xl text-gray-800 font-semibold mb-6">Delivery Information</p>

        <div className="flex flex-col md:flex-row gap-6 mb-4">
          {renderInput("firstName", "First Name", "text", { required: "First Name is required" })}
          {renderInput("lastName", "Last Name", "text", { required: "Last Name is required" })}
        </div>    
         <div className="flex flex-col gap-2">
            {renderInput("email", "Email", "email", { required: "Email is required" })}
            {renderInput("street", "Street Address", "text", { required: "Street Address is required" })}
         </div>
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {renderInput("city", "City", "text", { required: "City is required" })}
          {renderInput("state", "State", "text", { required: "State is required" })}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-4 mb-4">
          {renderInput("zipCode", "Zip Code", "text", { required: "Zip Code is required" })}
          {renderInput("country", "Country", "text", { required: "Country is required" })}
        </div>

        {renderInput("phone", "Phone Number", "text", { required: "Phone Number is required" })}

        <button
          type="submit"
          className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Deliver Here
        </button>
      </form>

      {/* Right Section: Price Details Sidebar */}
      <div className="price-details-container w-full lg:w-2/5 bg-white rounded-lg shadow p-8">
        <h3 className="text-lg font-bold mb-4">Price Details</h3>
        <div className="price-breakdown flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Total MRP:</p>
            <p>₹{calculateSubtotal()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-green-600">Discount ({discountPercentage}%):</p>
            <p className="text-green-600">-₹{calculateDiscount()}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Charges:</p>
            <p>₹{deliveryCharges}</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <p>Total Amount</p>
            <p>
              ₹
              {(
                calculateSubtotal() +
                deliveryCharges -
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
