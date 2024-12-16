import React, { useState } from 'react';
import { Sidebar,Chatlist, Inbox } from '../../section/chat';


const Main = () => {
  const [isminimized,setIsMinimized]=useState(true)

  const toggleMinimized=()=>{
    setIsMinimized(!isminimized)
  }
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark flex">
        {/* Sidebar */}
          <Sidebar isminimized={isminimized}/>

        {/* Chatlist */}
          <Chatlist isminimized={isminimized}/>

        {/* Inbox */}
           <Inbox isminimized={isminimized} toggleMinimized={toggleMinimized}/>
       
      </div>
    </div>
  );
};

export default Main;
