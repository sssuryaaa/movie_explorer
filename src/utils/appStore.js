import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./wishSlice";
import themeReducer from "./themeSlice";

const appStore = configureStore({
  reducer: {
    wish: wishReducer,
    theme: themeReducer,
  },
});

export default appStore;
