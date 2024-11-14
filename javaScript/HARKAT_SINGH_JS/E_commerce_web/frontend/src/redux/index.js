import { configureStore } from "@reduxjs/toolkit";
import  userSliceReducer  from "./userSlice";
import  productSliceReducer  from "./productSlice";
const store = configureStore({
    reducer: {
         user:userSliceReducer,
         product:productSliceReducer
    },
});

export default store;
