"use client"
import React, { useState } from 'react'
import {trelloItems} from "../../src/lib/data"

const Productivity = () => {
    const [itemIndex, setItemIndex] = useState(0);

    return (
        <div className='px-4 sm:px-8 md:px-16 py-11'>
            <p className='text-center text-lg font-semibold'>Trello 101</p>
            <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl text-center'>
                A Productivity Powerhouse
            </h1>
            <p className='text-xl my-5 text-center max-w-2xl mx-auto'>
                Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who's doing what and what needs to get done. Learn in our guide to get better.
            </p>
            <div className='grid grid-cols-[1.2fr_2fr] gap-6'>
                {/* Trello items list */}
                <div className='flex flex-col justify-between py-3 px-3'>
                    {trelloItems?.map((item, index) => (
                        <div
                            onClick={() => setItemIndex(index)}
                            key={index}
                            className={`cursor-pointer p-3 rounded-md ${index === itemIndex ? "bg-white border-l-4 border-[#00c7e5]" : ""}`}
                        >
                            <h4 className='mb-2 text-lg font-bold'>{item.title}</h4>
                            <p className='hidden md:block  mb-3 text-gray-700'>{item.desc}</p>
                        </div>
                    ))}
                </div>
                
                {/* Image display */}
                <div className='w-full flex justify-center'>
                    <img
                        src={`/productive_${itemIndex + 1}.jpg`}
                        alt="Productivity"
                        className='object-cover w-full rounded-lg md:w-3/4 lg:w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Productivity
