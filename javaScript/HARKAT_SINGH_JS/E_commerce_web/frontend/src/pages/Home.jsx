import React, { useEffect, useState, useRef } from "react";
import delevary from "../assets/bikeimage.png";
import Homecard from "../components/Homecard";
import { useSelector } from "react-redux";
import Cardfeature from "../components/Cardfeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import FilterProduct from "../components/FilterProduct";
import Allproduct from "../components/Allproduct";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  // Get first 4 products for display
  const homeProductCartList = productData.slice(1, 5);

  // Filter products by category "Vegetables"
  const homeProductCartListVegetable = productData.filter(
    (item) => item.category === "Vegetables"
  );



  // Loading state placeholder
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  // HANDLING THE NEXT AND PREVIOUS BUTTON
  const slideProduct = useRef();
  const nextProduct = () => {
    slideProduct.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProduct.current.scrollLeft -= 200;
  };

  
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex">
        {/* Left Part - Bike Delivery Info */}
        <div className="left-part md:w-1/2">
          <div className="flex gap-3 bg-green-300 w-fit px-3 py-1 items-center rounded-full shadow-md">
            <p className="text-sm font-semibold text-black">Bike Delivery</p>
            <img
              src={delevary}
              alt="delivery man on bike"
              className="h-10 w-10 rounded-full bg-white p-1"
            />
          </div>
          <h2 className="mt-4 md:text-7xl sm:text-4xl font-bold leading-tight">
            The fastest delivery to{" "}
            <span className="text-red-500">your home</span>
          </h2>
          <p className="mt-4 mb-6 font-semibold text-lg md:text-xl text-slate-800">
            Enjoy delicious meals delivered right to your doorstep in minutes.
            Our swift delivery service ensures your food stays hot, fresh, and
            ready to savor. From local favorites to exotic dishes, experience
            the flavors you love with the ease and comfort of home delivery.
          </p>
          <button className="bg-green-300 hover:bg-green-400 mb-2 rounded-lg px-4 py-2 font-semibold">
            Order Now
          </button>
        </div>

        {/* Right Part - Product Cards */}
        <div className="right-part md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0] ? (
            homeProductCartList.map((item, index) => (
              <Homecard
                key={item._id || index} // Use _id or index for key
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            ))
          ) : (
            loadingArray.map((items, index) => (
              <Homecard key={index} loading={"loading..."} />
            ))
          )}
        </div>
      </div>

      {/* Fresh Vegetables Section */}
      <div className="mt-10">
        <div>
          <h2 className="font-bold text-2xl text-slate-800">Fresh Vegetables</h2>
        </div>
        <div className="flex justify-between">
          <button
            onClick={prevProduct}
            className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
          >
            <GrPrevious />
          </button>
          <button
            onClick={nextProduct}
            className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
          >
            <GrNext />
          </button>
        </div>
        <div
          className="flex gap-5 mt-4 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProduct}
        >
          {homeProductCartListVegetable[0] ? (
            homeProductCartListVegetable.map((item, index) => (
              <Cardfeature
                key={item._id || index} // Ensure each card has a unique key
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            ))
          ) : (
            loadingArrayFeature.map((_, index) => (
              <Cardfeature key={index} loading="loading..." />
            ))
          )}
        </div>
      </div>
      <Allproduct heading={"Your Products"}/>
    </div>
  );
}

export default Home;
