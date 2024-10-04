import React from "react";
import Sidebar from "../components/SideBar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import Listitem from "./Listitem";

function Home() {
  const { data,loading } = useAuth();
  
  return (
    <div className="flex mt-2">
      <Sidebar />
      <div className="h-[calc(100vh-6.525rem)] overflow-y-auto overflow-x-hidden">
        <Listitem/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && data
            .filter((item) => item.type === "video")
            .map((item) => (
              <Video key={item.videoId} video={item.video} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
