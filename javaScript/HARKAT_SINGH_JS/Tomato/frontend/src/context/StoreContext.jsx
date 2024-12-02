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

    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            try {
                await axios.post(url + "/api/cart/add",
                    { itemId },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error adding item to cart:", error);
            }
        }
    };
    const removeFromcart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            try {
                await axios.post(url + "/api/cart/remove",
                    { itemId },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error deleting item from the  cart:", error);
            }
        }
    };

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get",
                { itemId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setCartItem(response.data.cartData);
        } catch (error) {
            console.error("Error fetching the data:", error);
        }
    }
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/allfood");
        setFoodList(response.data.data)
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                await loadCartData(savedToken);
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
        setToken
    };
    useEffect(() => {
        console.log("useState data", cartItem);
    }, [cartItem])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
