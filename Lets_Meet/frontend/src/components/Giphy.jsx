import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { ToggleGifModal } from "@/redux/slices/app";

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

const gf = new GiphyFetch(apiKey);

const Giphy = () => {
  const dispatch = useDispatch();
  const gridRef = useRef(); // Reference to the container element for DOM manipulation.
  const [isLoading, setIsLoading] = useState(false); // Indicates whether data is being loaded.
  const [value, setValue] = useState(""); // Tracks the value of the input field for the search query.
  const [error, setError] = useState(null); // Tracks API errors for user feedback.
  const [gifs, setGifs] = useState([]); // Stores the resultant GIFs fetched from the API.

  // Function to fetch GIFs from the Giphy API
  const fetchGifs = async (offset =0) => {
    try {
      const result = await gf.search(value || "trending", {
        offset,
        limit: 20,
      });
      return result;
    } catch (err) {
      throw new Error("Failed to fetch GIFs.");
    }
  };

  // Debounced function to reduce the number of API calls as the user types
  const debouncedfetchGifs = _.debounce(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newGifs = await fetchGifs(0);
      console.log("Fetched GIFs: ", newGifs);
      setGifs(newGifs.data); // Save the fetched GIFs in state.
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message); // Save the error message as a string.
    } finally {
      setIsLoading(false); // Stop the loading state after the data fetch is complete.
    }
  }, 1000);

  useEffect(() => {
    const fetchInitialGifs = async () => {
      setIsLoading(true); // Show loading state before fetching data.
      setError(null); // Reset error state before making an API call.

      try {
        const initialGifs = await fetchGifs(0);
        console.log("Fetched GIFs: ", initialGifs);
        setGifs(initialGifs.data); // Save the fetched GIFs in state.
      } catch (error) {
        console.error("API Error:", error);
        setError(error.message); // Save the error message as a string.
      } finally {
        setIsLoading(false); // Stop the loading state after the data fetch is complete.
      }
    };

    fetchInitialGifs(); // Fetch initial set of GIFs when the component mounts.
  }, []);

  const handleGifClick = (gif, e) => {
    e.preventDefault(); // Prevent default behavior of the click event
    console.log(gif); // Log the selected GIF object for debugging purposes
    const gifUrl = gif.images.original.url; // Get the URL of the original GIF image
    console.log(gifUrl); // Log the GIF URL for debugging purposes
    dispatch(ToggleGifModal({
        value:true,
        url:gifUrl
    })); // Dispatch action to toggle the modal (assumes you have a modal state management in your Redux store)
  };

  return (
    <div ref={gridRef} className="w-full">
      {/* Input field for searching GIFs */}
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value); // Update search query in state on input change.
          debouncedfetchGifs();
        }}
        type="text"
        placeholder="Search for gif...."
        className="text-black-2 border border-stroke dark:border-strokedark dark:bg-boxdark-2 dark:text-white dark:placeholder-gray-400 rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* Show loading message while GIFs are being fetched */}
      {isLoading && <p>Loading GIF's...</p>}

      {/* Show error message if API call fails */}
      {error && (
        <p>
          Error: <span className="text-blue-500">{error}</span>
        </p>
      )}

      <div className="h-48 overflow-auto no-scrollbar">
        {/* Grid component for displaying GIFs */}
        <Grid
          key={value}
          onGifClick={(gif, e) => handleGifClick(gif, e)} // Pass the gif and event to the handleGifClick function
          width={gridRef.current?.offsetWidth || 300}
          columns={8}
          gutter={6}
          fetchGifs={() => fetchGifs(0)}
        />
      </div>
    </div>
  );
};

export default Giphy;




{/*
  Grid: A prebuilt component from the Giphy library for displaying GIFs in a grid layout.
   It simplifies the rendering of GIFs and provides functionalities like click handling.

   import { GiphyFetch } from "@giphy/js-fetch-api";
GiphyFetch: A class provided by Giphy's JavaScript SDK for making API requests to the Giphy API. It is used to search for GIFs or retrieve trending GIFs.

4. import _ from "lodash";
lodash: A utility library that provides helpful methods for data manipulation, such as debounce, throttle, and more.
Here, the debounce function from Lodash is used to limit the rate at which the fetchGifs function is executed as the user types in the search input.

5. import { useDispatch } from "react-redux";
useDispatch: A React-Redux hook that provides access to the Redux store's dispatch function. It is used to dispatch actions to the Redux store.

6. import { ToggleGifModal } from "@/redux/slices/app";
ToggleGifModal: An action creator imported from a Redux slice. It is likely used to update the state in the Redux store, toggling a modal and passing the selected GIF URL to it.

Why are these imports needed?
React hooks (useEffect, useRef, useState) manage the component lifecycle, track user input, and handle DOM references.
Giphy tools (Grid, GiphyFetch) provide a ready-made solution for displaying GIFs and fetching data from the Giphy API.
Lodash (debounce) ensures efficient performance by reducing the number of API calls during user input.
Redux tools (useDispatch, ToggleGifModal) handle global state changes and trigger modal visibility with the selected GIF.
Would you like a specific explanation for how any of these are used in your code?
  * */}