import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Fooditem from "./Fooditem";

function FoodDisplay({ category = "All" }) {
  const { food_list } = useContext(StoreContext);

  console.log(food_list);
  if (!food_list || food_list.length === 0) {
    return <p>No food items available.</p>;
  }

  return (
    <div className="food_display mt-6 mb-6 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#262626] text-center mb-6">
        Top Dishes Near You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item) => {
          if (
            category === "All" ||
            category.toLowerCase() === item.category.toLowerCase()
          ) {
            return (
              <Fooditem
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          }
          return null; // Return null for unmatched items
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
