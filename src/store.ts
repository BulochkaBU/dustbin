import { configureStore } from "@reduxjs/toolkit";
import dustbinSlice from "./dustbinSlice";

const store = configureStore({
  reducer: {
    tt: dustbinSlice,
  },
});

export default store;
