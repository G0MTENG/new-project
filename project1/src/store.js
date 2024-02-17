import { configureStore } from "@reduxjs/toolkit";
import stock from "./store/stockSlice";

export default configureStore({
  reducer: {
    stock: stock.reducer,
  },
});
