import { createSlice } from "@reduxjs/toolkit";

// Initial state with modals and selectedGifUrl
const initialState = {
  modals: {
    gif: false,
    audio: false,
    media: false,
    doc: false,
  },
  selectedGifUrl: "",
};

// Create the slice
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updatedGifModal(state, action) {
      state.modals.gif = action.payload.value;
      state.selectedGifUrl = action.payload.url;
    },
    updateAudioModel(state, action) {
      state.modals.audio = action.payload;
    },
    updateMediaModel(state, action) {
      state.modals.media = action.payload;
    },
    updateDocumentModel(state, action) {
      state.modals.doc = action.payload;
    },
  },
});

// Export the reducer
export default slice.reducer;

// Export individual actions
export const ToggleGifModal = (payload) => (dispatch) => {
  dispatch(slice.actions.updatedGifModal(payload));
};

export const ToggleAudioModal = (value) => (dispatch) => {
  dispatch(slice.actions.updateAudioModel(value));
};

export const ToggleMediaModal = (value) => (dispatch) => {
  dispatch(slice.actions.updateMediaModel(value));
};

export const ToggleDocumentModal = (value) => (dispatch) => {
  dispatch(slice.actions.updateDocumentModel(value));
};
