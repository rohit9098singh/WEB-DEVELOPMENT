import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  cartItem: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      console.log(action);
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      console.log(action);
      const total = action.payload.price;
      state.cartItem = [
        ...state.cartItem,
        { ...action.payload, qty: 1, total: total }
      ]
    },
    deleteCartItem: (state, action) => {
      // Remove the item with the specified id
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
    }
  }
});

export default productSlice.reducer;
export const { setDataProduct, addCartItem, deleteCartItem } = productSlice.actions;
