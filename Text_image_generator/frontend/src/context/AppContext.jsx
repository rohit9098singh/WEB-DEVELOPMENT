import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(false);

    const navigate=useNavigate();

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    console.log(backendUrl);

    // Logout function that clears the token and user data
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    // Load the credit data after fetching the token
    const loadCreditData = async () => {
        if (!token) return;
      
        try {
          const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
            headers: { Authorization: `Bearer ${token}` },
          });
      
          if (data.success) {
            setCredit(data.creditBalance); // Use creditBalance from the response
            setUser(data.user); // Set user data
            localStorage.setItem("user", JSON.stringify(data.user)); // Persist user data
          }
        } catch (error) {
          console.log(error);
          toast.error(error.response?.data?.message || "An unexpected error occurred.");
        }
      };
      

  // Modify generateImage function to send correct headers and request body
  const generateImage = async (prompt) => {
   try {
     const {data}= await axios.post(
       `${backendUrl}/api/image/generateimage`, // Updated to POST method
       { prompt }, // Send the prompt as part of the request body
       { headers: { Authorization: `Bearer ${token}` } } // Authorization header with the token
     );

     if(data.success){
      loadCreditData();
      return data.resultImage
     }
     else{
      toast.error(data.message)
      loadCreditData();
      if(data.creditBalance === 0){
         navigate("/buy")
      }
     }
   } catch (error) {
     toast.error(error.response?.data?.message || error.message); // Handle errors gracefully
   }
 };
 

    // Fetch credit data whenever the token changes
    useEffect(() => {
        if (token) {
            loadCreditData();
        }
    }, [token]);

    // Provide context values to the rest of the app
    const value = {
        loadCreditData,
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        logout,
        generateImage
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
