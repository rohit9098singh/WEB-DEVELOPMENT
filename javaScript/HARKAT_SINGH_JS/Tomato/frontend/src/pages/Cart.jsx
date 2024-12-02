import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate=useNavigate();
  const { cartItem,removeFromcart, food_list,calculateSubtotal,calculateTotal,url} = useContext(StoreContext);
  return (
    <div className="cart-container p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Cart</h2>

      {/* Cart Header */}
      <div className="cart-item-header hidden sm:grid grid-cols-6 gap-4 font-semibold border-b-2 pb-2 text-sm sm:text-base">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      <div className="sm:block overflow-auto">
        {food_list.some((item) => cartItem[item._id] > 0) ? (
          food_list.map((item) => {
            if (cartItem[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="cart-item grid grid-cols-2 sm:grid-cols-6 gap-4 items-center py-2 border-b text-sm sm:text-base"
                >
                  <img
                    src={url+"/images/"+item.image}
                    alt={item.name}
                    className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded"
                  />
                  <p>{item.name}</p>
                  <p className="hidden sm:block">₹{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p className="hidden sm:block">₹{(item.price * cartItem[item._id]).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromcart(item._id)}
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-600 text-xs sm:text-base"
                  >
                    Remove
                  </button>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="mt-4 text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Bottom Section */}
      <div className="bottm_part mt-6">
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
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="promo_code mt-6 p-4 bg-gray-50 shadow-md">
          <div className="promo_container">
            <p className="text-base sm:text-lg font-semibold">
              If you have any promo code, add it here:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <input
                type="text"
                placeholder="Promo code"
                className="border border-gray-200 p-2 rounded-lg w-full sm:w-2/3"
              />
              <button className="bg-green-400 rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
