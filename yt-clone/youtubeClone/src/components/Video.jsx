import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time"; // Make sure the path is correct
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number'; // Importing with curly braces

function Video({ video }) {
  console.log(video);

  // Handle missing video data
  if (!video) {
    return <div>No video data available.</div>;
  }

  // Safely get thumbnail and avatar URLs with default fallbacks
  const thumbnailUrl =
    video?.thumbnails?.length > 0
      ? video.thumbnails[0].url
      : "default-thumbnail.jpg";
  const avatarUrl =
    video?.author?.avatar?.length > 0
      ? video.author.avatar[0].url
      : "default-avatar.jpg";

  // Ensure views data exists and is a number before formatting
  const views = video?.stats?.views ? abbreviateNumber(video.stats.views, 2) : "No views";

  return (
    <div>
      <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-col">
          {/* Video thumbnail */}
          <div className="relative ml-2 mb-2 h-48 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={thumbnailUrl} // Use the safe thumbnail URL
              alt="Thumbnail"
            />
            {video?.lengthSeconds != null && (
              <Time time={video.lengthSeconds} />
            )}
          </div>
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={avatarUrl} 
                  alt="Author avatar"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px]">
                {video?.author?.title}
                {video?.author?.badges?.length > 0 && video.author.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${views} views`}</span>
                <span className="flex text-[24px] leading-none font-bold realtive mx-1 ">.</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
