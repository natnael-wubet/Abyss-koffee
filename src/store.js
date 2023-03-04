import { configureStore } from "@reduxjs/toolkit";
import pathSlice from "./pathSlice";
import layoutSlice from "./storeSlices/layoutSlice";
import BeansSlice from "./storeSlices/BeansSlice";
const store = configureStore({
  reducer: {
    path: pathSlice,
    layout: layoutSlice,
    Beans: BeansSlice,
  },
});

export default store;
