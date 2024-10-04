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
    <div>
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`} 
          height="100%"
          width="100%"
          controls
          style={{ backgroundColor: "#000000" }} 
          playing={true}
        /> {/* We will need this to let the video play */}
      </div>
    </div>
  );
}

export default PlayingVideo;
