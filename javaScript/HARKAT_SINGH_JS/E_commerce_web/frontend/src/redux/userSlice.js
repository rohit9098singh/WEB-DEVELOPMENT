import { createSlice } from "@reduxjs/toolkit";

// Initial state with user data
const initialState = {
  user: {
    email: "",
    firstName: "",
    image: "", // You can set an initial image URL or leave it empty
    lastName: "",
    password: "", // Password is usually not stored in state
    _id: "",
  },
};

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer to set user data in state after login
    loginRedux: (state, action) => {
      console.log("where i am getting loged ", action.payload); // Log the payload for debugging purposes
      // Assuming the payload contains the full user object
      state.user = action.payload.data || action.payload; // Ensure you handle the structure correctly
    },

    // Reducer to remove the data after logout
    logoutRedux: (state) => {
      state.user = { ...initialState.user }; // Reset the user data to initial state
    },
  },
});

// Export the action created by createSlice
export const { loginRedux, logoutRedux } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
