import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets'; // Ensure the path is correct
import { StoreContext } from '../context/StoreContext';

function Fooditem({ id, name, price, description, image }) {
  const { cartItem, addToCart, removeFromcart,url } = useContext(StoreContext);

  return (
    <div className="food_item w-full bg-gray-50 drop-shadow-md rounded-lg overflow-hidden hover:shadow-lg">
      <div className="food_item_image relative">
        <img
          src={url+"/images/"+image}
          alt={name}
          className="w-full h-60 object-cover rounded-t-xl bg-black opacity-90"
        />
        {!cartItem[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() =>{ 
              console.log("Adding item with id:", id);   
              addToCart(id)
            }} 
            className="bg-gray-500 rounded-full mt-2 absolute right-0 bottom-5"
          />
        ) : (
          <div className="food-item-counter flex gap-2 items-center p-3">
            <img
              onClick={() => removeFromcart(id)} 
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p className="font-bold">{cartItem[id]}</p>
            <img
              onClick={() =>{ 
                console.log("Adding item with id:", id);
                addToCart(id)
              }} 
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="items_info p-4">
        <div className="items_ratings flex justify-between items-center mb-2">
          <p className="font-semibold text-lg">{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" className="w-16" />
        </div>
        <p className="desc text-sm text-gray-600 mb-2">{description}</p>
        <p className="price font-bold text-xl text-[#262626]">
          <span className="text-red-500">₹ </span>
          {price}
        </p>
      </div>
    </div>
  );
}

export default Fooditem;
