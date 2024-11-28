import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false,
};

const loginSendCodeSlice = createSlice({
  name: 'loginSendCode',
  initialState,
  reducers: {
    openLoginCodeModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginCodeModal: (state) => {
      state.isLoginModalOpen = false;
    },
  },
});

export const { openLoginCodeModal, closeLoginCodeModal } = loginSendCodeSlice.actions;

export default loginSendCodeSlice.reducer;
