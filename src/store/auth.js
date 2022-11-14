import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const authSlice = createSlice({
  //redux use it, like key in react
  name: "auth",
  //initial state
  initialState: initialState,
  //functions to munipulate the state
  //the functions inside the reducers called actions
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

//export the actions so we can use them inside other components
//to update the slice "counter state"
export const authActions = authSlice.actions;

//export the configuration to index.js of redux
//so redux can configure the "big state"
export default authSlice.reducer;
