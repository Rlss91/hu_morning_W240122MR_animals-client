import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

//initialize redux "the global state"
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
