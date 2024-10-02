import React from "react";
import Sidebar from "./SideBar"; // Correct import
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { data } = useAuth(); // Destructuring data from useAuth
  console.log(data);

  return (
    <div className="flex mt-10">
      <Sidebar />
      <div className=" h-[calc(100vh-6.525rem)] overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
          {data
            .filter((item) => item.type === "video") // Filter out non-video items
            .map((item) => (
              <Video key={item.id} video={item.video} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home; // Default export
