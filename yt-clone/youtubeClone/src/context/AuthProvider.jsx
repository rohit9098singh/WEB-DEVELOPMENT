{
  /*In React, the context folder is typically used to organize 
   code related to React Context API. The Context API is a 
   feature in React that allows you to share data (like state)
   globally across different components, without having to pass 
   props down manually at every level of the component tree.
   This helps to avoid "prop drilling" (the need to pass data through many layers of components).
   
   
    export default function AuthProvider({ children })==> CHILDREN MEANS ALL THE COMPONENTS THAT IS
                                                         :sidebar,navbar,app.jsx all taki har place pe 
                                                          context api ko use kar sake 
   
   */
}
// Import necessary hooks and functions from React and utilities.
import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

// Create the AuthContext to share state globally.
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // State management
  const [loading, setLoading] = useState(false); // Tracks if data is being fetched
  const [data, setData] = useState([]);         // Stores fetched data
  const [value, setValue] = useState("new");    // Default search query

  // When `value` changes, fetch new data.
  useEffect(() => {
    fetchAllData(value); // Fetch data whenever `value` changes
  }, [value]);

  // Function to fetch data from the API.
  const fetchAllData = (query) => {
    setLoading(true); // Set loading to true while fetching
    fetchData(`search/?q=${query}`)
      .then((res) => {
        setData(res.contents);   // Store fetched data in `data`
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]); // Optionally reset data on error
      })
      .finally(() => {
        setLoading(false); // Set loading to false in any case (success or failure)
      });
  };
  

  // Provide state and functions to all child components.
  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}> {/** will use all of this in app.jsx*/}
      {children} {/* Renders all child components here */}
    </AuthContext.Provider>
  );
}

// Custom hook for easily accessing AuthContext in other components.
export const useAuth = () => {
  return useContext(AuthContext);
};
