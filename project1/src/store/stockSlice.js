import { createSlice } from "@reduxjs/toolkit";

let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 10, name: "White and Black", count: 2 },
    { id: 20, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase(state, action) {
      const index = state.findIndex((ele) => ele.id === action.payload);
      state[index].count++;
      return state;
    },
    decrease(state, action) {
      const index = state.findIndex((ele) => ele.id === action.payload);
      state[index].count--;
      return state;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { increase, decrease, addItem } = stock.actions;

export default stock;
