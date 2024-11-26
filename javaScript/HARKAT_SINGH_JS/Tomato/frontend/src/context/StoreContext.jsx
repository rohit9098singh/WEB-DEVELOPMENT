import React, { createContext,useEffect,useState } from "react";
import {food_list} from "../assets/frontend_assets/assets"
// 1. Create the context
export const StoreContext = createContext(null);
console.log(food_list.name);

// 2. Create the Provider component
const StoreContextProvider = (props) => {
    const [cartItem,setCartItem]=useState({});

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };
    
    const removeFromcart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
    const calculateSubtotal = () => {
        return Object.keys(cartItem).reduce((acc, itemId) => {
          const item = food_list.find((food) => food._id === itemId);
          if (item && cartItem[itemId] > 0) {
            return acc + item.price * cartItem[itemId];
          }
          return acc;
        }, 0);
      };
    
      const calculateTotal = () => {
        return calculateSubtotal() + 2; // Adding a fixed delivery fee of ₹2
      };
    
    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromcart,
        calculateTotal,
        calculateSubtotal
    };
    useEffect(()=>{
        console.log("useState data",cartItem);
    },[cartItem])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
                                                       