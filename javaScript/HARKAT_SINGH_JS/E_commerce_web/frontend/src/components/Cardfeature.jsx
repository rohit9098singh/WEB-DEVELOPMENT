import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addCartItem } from "../redux/productSlice";

function Cardfeature({ name, image, category, price, loading, id }) {
    const dispatch=useDispatch()
    const handleAddCartProduct = (e) => {
        e.stopPropagation();
        dispatch(addCartItem({
            _id:id,
            name:name,
            price:price,
            category:category
        }));
  };

    return (
        <div className="w-full min-w-[280px] max-w-[200px] bg-white shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-2xl">
            {loading ? (
                <div className="min-h-[150px] flex justify-center items-center mb-4">
                    <p>Loading...</p>
                </div>
            ) : image ? (
                <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
                    {/* Product Image */}
                    <div className="h-40 w-full flex items-center justify-center mb-2">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-[150px] object-cover rounded-lg"
                        />
                    </div>
                    {/* Product Info */}
                    <h3 className="font-bold text-lg text-center capitalize mb-1">{name}</h3>
                    <p className="text-gray-700 text-center font-medium mb-1">Price: ₹{price}</p>
                    <p className="text-gray-700 text-center font-medium">Category: {category}</p>
                </Link>
            ) : (
                <div className="min-h-[150px] flex justify-center items-center mb-4">
                    <p>No image available</p>
                </div>
            )}
            {/* Add to Cart Button */}
            <div className="flex justify-center mt-2 w-full">
                <button onClick={handleAddCartProduct} className="bg-yellow-400 hover:bg-yellow-500 rounded-lg px-4 py-2 font-semibold">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Cardfeature;
