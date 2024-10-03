import React from 'react';

function Listitem() {
  const categories = [
    "ALL", "Music", "React router", "Computer Programming", "Reverberation", "Movie Musicals",
    "India national cricket team", "News", "Mixes", "1990s", "Telugu cinema", "Live", "Dramedy",
    "Dubbing", "Indian soap opera", "Cricket", "Football", "learn coding"
  ];

  return (
    <div className='flex  overflow-x-scroll hide-scroll-bar px-3 'style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
     <div className='flex space-x-4 flex-nowrap'>
     {categories.map((category) => {
        return (
          <div 
            key={category} 
            className=' flex-none  border-gray-200  hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer'
          >
            {category} 
          </div>
        );
      })}
     </div>
    </div>
  );
}

export default Listitem;
