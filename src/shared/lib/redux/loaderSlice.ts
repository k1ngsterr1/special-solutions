import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    turnOnLoading: (state) => {
      state.isLoading = true;
    },
    turnOffLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { turnOffLoading, turnOnLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
