import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./wishSlice";

const appStore = configureStore({
  reducer: {
    wish: wishReducer,
  },
});

export default appStore;
