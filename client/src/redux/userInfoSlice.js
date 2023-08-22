import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', profile: '' };

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
