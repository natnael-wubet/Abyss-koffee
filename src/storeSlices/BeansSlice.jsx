import { createSlice } from "@reduxjs/toolkit";

import Musica from "../Beans/Musica";
const initialState = {
  default: 0,
  names: ["Musica"],
  BeansList: { Musica: <Musica key={0} /> },
  layouts: {
    Musica: {
      layout: { i: "a", x: 2, y: 0, w: 5, h: 2, minW: 2, maxW: 10 },
    },
  },
};
export const BeansSlice = createSlice({
  name: "BeansSlice",
  initialState,
  reducers: {
    change: (state, index) => {
      state.default = index;
    },
  },
});
export const { change } = BeansSlice.actions;
export default BeansSlice.reducer;
