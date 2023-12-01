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
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
