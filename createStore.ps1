$defaultValue = 'src/'

while (1) {
    $storeName= read-host('Store name: ')
    "
    import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  default:0
};
export const $($storeName)Slice = createSlice({
  name: '$($storeName)Slice',
  initialState,
  reducers: {
    change: (state, index) => {
      state.default = index;
    },
    
  },
});
export const {  change } = $($storeName)Slice.actions;
export default $($storeName)Slice.reducer;

">"src/storeSlices/$($storeName)Slice.js"

}