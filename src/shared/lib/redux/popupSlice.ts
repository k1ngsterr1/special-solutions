import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popupMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
    },
    disablePopup: (state) => {
      state.isOpen = false;
    },
  },
});

export const { togglePopup, disablePopup } = popupSlice.actions;
export default popupSlice.reducer;
