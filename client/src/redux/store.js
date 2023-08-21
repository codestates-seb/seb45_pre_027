import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/loginSlice';
import userInfoReuducer from '../redux/userInfoSlice';
import tokenReducer from './tokenSlice';

export const store = configureStore({
  reducer: {
    isLogin: loginReducer,
    userInfo: userInfoReuducer,
    authToken: tokenReducer,
  },
});
