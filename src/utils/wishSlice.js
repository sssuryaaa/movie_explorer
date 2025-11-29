import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishSlice.actions;

export default wishSlice.reducer;
