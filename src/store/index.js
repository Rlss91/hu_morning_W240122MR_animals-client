import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

//initialize redux "the global state"
const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
    authSlice: authReducer,
  },
});

export default store;
