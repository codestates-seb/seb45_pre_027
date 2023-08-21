import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600 * 1000;

export const tokenSlice = createSlice({
  name: 'authToken',
  initialState: {
    // 로그인 여부
    authenticated: false,
    // accss token
    accessToken: null,
    // 토큰 만료 시간
    expireTime: null,
  },
  reducers: {
    // 토큰 정보 저장
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    // 토큰 초기화
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
