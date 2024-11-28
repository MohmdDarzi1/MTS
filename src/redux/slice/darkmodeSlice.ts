import { createSlice } from '@reduxjs/toolkit';

import { RootState } from "../Store/Store";

interface DarkModeState {
  mode: "light" | "dark";
}

const initialState: DarkModeState = { mode: "light" };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

// انتخاب حالت تاریک از store
export const selectDarkMode = (state: RootState) => state.darkMode.mode;
