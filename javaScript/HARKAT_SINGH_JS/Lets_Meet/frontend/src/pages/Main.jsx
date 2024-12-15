import React from 'react';
import { Sidebar,Chatlist, Inbox } from '../section/chat';


const Main = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark flex">
        {/* Sidebar */}
          <Sidebar />

        {/* Chatlist */}
          <Chatlist/>

        {/* Inbox */}
           <Inbox/>
       
      </div>
    </div>
  );
};

export default Main;
