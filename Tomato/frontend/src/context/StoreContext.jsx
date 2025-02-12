import React, { createContext, useEffect, useState } from "react";
import axios from "axios"
// 1. Create the context
export const StoreContext = createContext(null);


// 2. Create the Provider component
const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const discountPercentage = 10; 

    const calculateDiscount = () => {
      return ((calculateSubtotal() * discountPercentage) / 100).toFixed(2);
    };
    console.log("here is the token",token)

    const addToCart = async (itemId) => {

        setCartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            // Sync to localStorage for non-logged-in users
            if (!token) {
                localStorage.setItem("cartItem", JSON.stringify(updatedCart));
            }
            return updatedCart;
        });

        if (token) {
            try {
                await axios.post(
                    `${url}/api/cart/add`,
                    { itemId },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error adding item to cart:", error);
            }
        }
    };
    const removeFromcart = async (itemId) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            // Sync to localStorage for non-logged-in users
            if (!token) {
                localStorage.setItem("cartItem", JSON.stringify(updatedCart));
            }
            return updatedCart;
        });

        if (token) {
            try {
                await axios.post(
                    `${url}/api/cart/remove`,
                    { itemId },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error removing item from cart:", error);
            }
        }
    };


    // const loadCartData = async (token) => {
    //     try {
    //         const response = await axios.post(url + "/api/cart/get",
    //             { itemId },
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    //         setCartItem(response.data.cartData);
    //     } catch (error) {
    //         console.error("Error fetching the data:", error);
    //     }
    // }
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/allfood`);
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                // await loadCartData(savedToken);
            } else {
                const savedCart = localStorage.getItem("cartItem");
                if (savedCart) {
                    setCartItem(JSON.parse(savedCart)); // Load cart from localStorage
                }
            }
        }
        loadData();
    }, []);

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
        calculateSubtotal,
        url,
        token,
        setToken,
        calculateDiscount,
        discountPercentage
    };


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

