import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams(); // Destructuring id from useParams

  // Use useEffect to fetch video details when the component mounts
  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`)
      .then((res) => {
        console.log(res);
        setVideo(res);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
      });
  };

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] mt-16'>
      <div className='w-full max-w-[1500px] flex flex-col lg:flex-row'>
         <div className='flexflex-col lg:w-[cal(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6'>
              <div className='h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml  '>
                         console.log("helo");
                         
              </div>
          </div>{/* We will need this to let the video play */}
      </div>
    </div>
  );
}

export default PlayingVideo;
