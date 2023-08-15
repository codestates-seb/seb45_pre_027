import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/loginSlice';
import userInfoReuducer from '../redux/userInfoSlice';

export const store = configureStore({
  reducer: {
    isLogin: loginReducer,
    userInfo: userInfoReuducer,
  },
});
