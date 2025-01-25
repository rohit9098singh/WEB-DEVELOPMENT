"use client"
import { planeList } from '@/lib/data'
import React, { useState } from 'react'

const PlansComponent = () => {
    const [planeIndex, setPlaneIndex] = useState(0);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="p-6 px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {planeList.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setPlaneIndex(index)}
                        className={`relative flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg cursor-pointer border-2 transition-transform duration-300 transform ${
                            planeIndex === index
                                ? "scale-105 border-blue-500"
                                : "border-gray-300 hover:scale-105"
                        }`}
                    >
                        <div className="mb-4">
                            <h1 className="text-lg font-semibold uppercase text-gray-800">
                                {item.planeName}
                            </h1>
                        </div>

                        <p className="text-3xl font-bold text-gray-800">
                            <span className="text-gray-500">$</span>
                            {item.price}
                            <span className="text-sm text-gray-500 ml-1">/ USD</span>
                        </p>

    
                        <p className="text-gray-600 my-4 text-sm">{item.desc}</p>

        
                        <div className="text-center mt-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2 rounded-md transition">
                                {item.button}
                            </button>
                        </div>

    
                        {planeIndex === index && (
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold py-1 px-4 rounded-bl-md">
                                Selected
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlansComponent;
