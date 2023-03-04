import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  defaultLayout: 0,
  currentLayout: 0,

  layouts: [
    [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 2, y: 0, w: 5, h: 5, minW: 2, maxW: 10 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
  ],
};
export const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    changeLayout: (state, index) => {
      state.currentLayout = index;
    },
    addLayout: (state, layout) => {
      state.layouts.push(layout);
    },
  },
});
export const { addLayout, changeLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
