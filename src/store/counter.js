import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store
const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  //redux use it, like key in react
  name: "counter",
  //initial state
  initialState: initialState,
  //functions to munipulate the state
  //the functions inside the reducers called actions
  reducers: {
    add1(state) {
      state.counter++;
    },
  },
});

//export the actions so we can use them inside other components
//to update the slice "counter state"
export const counterActions = counterSlice.actions;

//export the configuration to index.js of redux
//so redux can configure the "big state"
export default counterSlice.reducer;
