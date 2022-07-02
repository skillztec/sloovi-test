import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [
    {
    User_id: new Date().getTime(),
    email: 'smithwills1989@gmail.com',
    password: '12345678',
  }]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      // state.email = action.payload.email
    },
    signOutUser: (state) => {
      state.user = null;
      // state.email = null
    },
  },
});

export const { loginUser, signOutUser } = userSlice.actions;
//selects user from global store
export const selectUser = (state) => state.user.user
// export const selectUserEmail = (state) => state.user.email


export default userSlice.reducer;