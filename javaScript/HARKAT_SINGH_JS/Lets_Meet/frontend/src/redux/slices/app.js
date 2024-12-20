import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    gif: false,
    audio: false,
  },
  selectedGifUrl: "",
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Reducer to update GIF modal state and URL
    updatedGifModal(state, action) {
      state.modals.gif = action.payload.value; // Open or close the modal
      state.selectedGifUrl = action.payload.url; // Set the selected GIF URL
    },
    // Reducer to update audio modal state
    updateAudioModel(state, action) {
      state.modals.audio = action.payload; // Open or close the audio modal
    },
  },
});

// Export the reducer
export default slice.reducer;

// Action to toggle GIF modal
export const ToggleGifModal = (payload) => async (dispatch) => {
  dispatch(slice.actions.updatedGifModal(payload));
};

// Action to toggle audio modal
export const ToggleAudioModal = (value) => async (dispatch) => {
  dispatch(slice.actions.updateAudioModel(value));
};
