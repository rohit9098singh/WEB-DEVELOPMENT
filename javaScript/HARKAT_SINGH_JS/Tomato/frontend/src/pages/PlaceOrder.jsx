import React, { useState,useContext } from "react";
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Clear the form after submission
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
  const { calculateSubtotal,calculateTotal} = useContext(StoreContext);
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 gap-8 bg-gray-50">
      {/* Left Section: Form */}
      <form
        className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl text-gray-800 font-semibold mb-6">
          Delivery Information
        </p>

        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 outline-none"
              placeholder="First Name"
            />
          </div>

          <div className="flex flex-col w-full">
           <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 outline-none"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mt-4 ">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Email"
          />
        </div>

        {/* Address Fields */}
        <div className="mt-4">
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Street Address"
          />
        </div>

        <div className="mt-4 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col w-full">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 outline-none"
                placeholder="city"
              />
            </div>
          <div className="flex flex-col w-full">
           <input
               type="text"
               name="state"
               value={formData.state}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 outline-none"
              placeholder="state"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col w-full">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 outline-none"
                placeholder="pincode"
              />
            </div>
          <div className="flex flex-col w-full">
           <input
               type="text"
               name="country"
               value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 outline-none"
              placeholder="country"
            />
          </div>
        </div>
        <div className="mt-4"> 
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 outline-none"
            placeholder="Phone Number"
          />
        </div>
      </form>

      {/* Right Section: Order Summary */}
      <div className="bottm_part mt-6 w-1/2">
        <div className="bottom_container flex flex-col gap-4 bg-gray-100 rounded-md shadow-lg p-4">
          <div className="product_price flex justify-between items-center">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">₹{calculateSubtotal()}</p>
          </div>
          <hr className="border-gray-300" />
          <div className="delivary_added flex justify-between items-center">
            <p className="font-semibold">Delivery fee</p>
            <p className="font-semibold">₹{calculateSubtotal()=== 0 ? 0:2}</p>
          </div>
          <hr className="border-gray-300" />
          <div className="total_amount flex justify-between items-center">
            <p className="font-bold text-2xl sm:text-xl">Net Payable</p>
            <p className="font-semibold">₹{calculateSubtotal()===0 ? 0 : calculateTotal()}</p>
          </div>
          <hr className="border-gray-300" />
          <div className="checkout_button mt-4 flex items-center">
            <button 
               onClick={()=>navigate('/placeorder')}
               className="bg-blue-500 px-4 py-2 hover:bg-blue-600 rounded-md text-white w-full sm:w-auto">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default PlaceOrder;
