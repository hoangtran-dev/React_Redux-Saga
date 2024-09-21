import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    mode: 'light', // Mặc định là light mode
  },
  reducers: {
    changeMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { changeMode } = appSlice.actions;
export default appSlice.reducer;
