import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slices/postSlice";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;