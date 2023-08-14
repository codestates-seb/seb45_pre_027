import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../store/loginSlice";
import userInfoReuducer from "../store/userInfoSlice";

export const store = configureStore({
  reducer: {
    isLogin: loginReducer,
    userInfo: userInfoReuducer,
  },
});
