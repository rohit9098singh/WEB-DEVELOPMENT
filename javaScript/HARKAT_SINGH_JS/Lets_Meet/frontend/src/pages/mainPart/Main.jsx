import React, { useState } from 'react';
import { Sidebar,Chatlist, Inbox } from '../../section/chat';
import GifModel from '../../components/GIfModel';
import VoiceRecorder from "../../components/VoiceRecorder";
import MediaPicker from '../../components/MediaPicker';
import DocumentPicker from '../../components/DocumentPicker';

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
       
       {/**GIFmodal the modal window over here  */}
       <GifModel/>
       <VoiceRecorder/>
       <MediaPicker/>
       <DocumentPicker/>
      </div>
    </div>
  );
};

export default Main;
