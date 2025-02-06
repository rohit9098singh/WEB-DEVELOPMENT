"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate data fetching
  }, []);

  return (
    <div className="p-6">
      {loading ? (
        // Skeleton Loader
        <div className="animate-pulse space-y-4">
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ) : (
        // Actual Content
        <div>
          <img src="/window.svg" alt="radom check image" />
          <h1 className="text-xl font-bold mt-4">Welcome to Next.js!</h1>
          <p className="text-gray-600">Your content has loaded.</p>
        </div>
      )}
    </div>
  );
}
