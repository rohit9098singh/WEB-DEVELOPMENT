import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    firstName: "",
    image: "",
    lastName: "",
    password: "",
    _id: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.user = action.payload.data || action.payload;
    },
    logoutRedux: (state) => {
      state.user = { ...initialState.user };
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
