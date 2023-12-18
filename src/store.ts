import { configureStore } from "@reduxjs/toolkit";
import dustbinSlice from "./dustbinSlice";

const store = configureStore({
  reducer: {
    dustbinsSlice: dustbinSlice,
  },
});

export default store;
