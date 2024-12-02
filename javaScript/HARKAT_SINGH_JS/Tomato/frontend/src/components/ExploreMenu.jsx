import React from 'react';
import { menu_list } from "../assets/frontend_assets/assets";

function ExploreMenu({category,setCategory}) {
    return (
        <div className='mt-8 flex flex-col gap-[20px] mb-4'>
            {/* Title and Description */}
            <h1 className='text-3xl md:text-4xl font-bold text-[#262626] text-center'>
             Explore Our Menu
            </h1>
            <p className='max-w-[60%] mx-auto text-lg md:text-xl text-center'>
                Choose from our diverse menu featuring a delectable array of dishes that cater to every taste and preference.
                Enjoy the finest flavors crafted just for you!
            </p>

            {/* Menu List */}
            <div className='menu-list flex overflow-x-auto scrollbar-none gap-[20px] px-4 py-6' id="ExploreMenu">
                {menu_list.map((item,index) => (
                    <div onClick={()=>{setCategory((prev)=>{
                        prev === item.menu_name ?"All":item.menu_name
                    })}} key={item.id || index} className='menu-item flex flex-col items-center bg-gray-50 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 min-w-[200px]'>
                        {/* Menu Image */}
                        <img
                            src={item.menu_image}
                            alt={item.menu_name}
                            className='menu-item-image w-[150px] h-[150px] object-cover rounded-xl mb-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:opacity-90 shadow-md'
                        />
                         {/* Menu Name */}
                        <h2 className='menu-item-title text-xl font-semibold text-[#333]'>{item.menu_name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreMenu;
