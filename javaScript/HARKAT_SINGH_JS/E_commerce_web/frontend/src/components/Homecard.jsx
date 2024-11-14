import React from "react";
import { Link } from "react-router-dom";

function Homecard({ name, image, category, price,loading,id }) {
  return (
    <div className="bg-white drop-shadow-md hover:drop-shadow-lg p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 min-w-[150px] ]">
      {name ? (
        <>
          <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
              <div className="h-40 w-full flex items-center justify-center mb-2">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-center capitalize mb-1">{name}</h3>
              <p className="text-gray-700 text-center font-medium mb-1">Price: ₹-{price}</p>
              <p className="text-gray-700 text-center font-medium">Category: {category}</p>
          </Link>
        </>
      )
      :
      <div className="flex justify-center items-center h-full">
        <p>{loading}</p>
      </div>
    }

    </div>
  );
}

export default Homecard;
