import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    password: ''
  }
};

const userSlice = createSlice({
  name: users,
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.user = action.payload.user
    },
    signOutUser: state => {
      state.user = null
    }
  }
});

export const {LoginUser, signOutUser} = userSlice.actions;
//select user
export const selectUser = state => state.users.user;

export default userSlice.reducer;