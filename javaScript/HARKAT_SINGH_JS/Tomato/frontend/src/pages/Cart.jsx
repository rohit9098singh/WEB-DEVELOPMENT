import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import Home from "./Home";

function Cart() {
  const navigate = useNavigate();
  const {
    cartItem,
    addToCart,
    removeFromcart,
    food_list,
    calculateSubtotal,
    url,
    calculateDiscount,
    discountPercentage
  } = useContext(StoreContext);

  // const discountPercentage = 10; 

  // const calculateDiscount = () => {
  //   return ((calculateSubtotal() * discountPercentage) / 100).toFixed(2);
  // };

  return (
    <div className="cart-page-container flex flex-col lg:flex-row gap-6 p-4 m-4 md:m-8">
      {/* Product List Section */}
      <div className="product-list-container w-full lg:w-3/5 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">
          My Cart ({Object.keys(cartItem).length} items)
        </h2>
        {food_list.some((item) => cartItem[item._id] > 0) ? (
          food_list.map((item) => {
            if (cartItem[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="product-item flex gap-4 border-b-2 py-4 items-center"
                >
                  <img
                    src={url + "/images/" + item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">Price: ₹{item.price}</p>
                  </div>
                  <div className="text-right flex flex-col items-center">
                    <p className="text-gray-800 font-semibold">
                      ₹{(item.price * cartItem[item._id]).toFixed(2)}
                    </p>
                    <div className="quantity-controls flex items-center gap-2 mt-2">
                      <button
                        onClick={() => removeFromcart(item._id, false)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        -
                      </button>
                      <span>{cartItem[item._id]}</span>
                      <button
                        onClick={() => addToCart(item._id, true)}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        ) : (
          <div className="flex flex-col items-center text-gray-500 mt-4">
            <img src={assets.empty_cart} alt="Empty Cart" />
            <button
               onClick={() => navigate("/#explore-menu")}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>

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
            <p>₹{( calculateSubtotal() +(calculateSubtotal() === 0 ? 0 : 20) - calculateDiscount() ).toFixed(2)}
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
}

export default Cart;
