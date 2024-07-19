import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
