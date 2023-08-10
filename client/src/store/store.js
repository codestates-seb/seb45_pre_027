import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../store/loginSlice";

export const store = configureStore({
  reducer: {
    isLogin: loginReducer,
  },
});
