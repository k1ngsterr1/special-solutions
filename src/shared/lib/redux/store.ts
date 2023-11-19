 // store.ts
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Explicitly enabling DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
