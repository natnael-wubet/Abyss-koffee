import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pathDir: "/",
  count: 2,
  testArray: ["lll"],
};
export const pathSlice = createSlice({
  name: "pathSlice",
  initialState,
  reducers: {
    addArray: (state) => {
      state.testArray.push(state.testArray.length);
    },
    addCount: (state) => {
      state.count = 9;
    },
  },
});
export const { addArray, addCount } = pathSlice.actions;
export default pathSlice.reducer;
