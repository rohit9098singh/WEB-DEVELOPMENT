// Importing the `configureStore` function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing the todo reducer from the `features/todo` folder
// This reducer manages all the state and logic related to the "todo" feature
// therefore my store should be aware of that 
import todoReducer from "../features/todo/todoSlice";
export const store=configureStore({
     reducer:todoReducer
});