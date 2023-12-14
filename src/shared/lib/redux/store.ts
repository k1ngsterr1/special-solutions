// store.ts
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import popupReducer from "./popupSlice";
import loaderReducer from "./loaderSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    popup: popupReducer,
    loader: loaderReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Explicitly enabling DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
