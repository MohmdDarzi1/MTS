// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("authToken") || null,
};

const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload);  
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("authToken");  
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
