// redux/slice/SignUp.ts
import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const SignUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.isOpen = true;
    },
    closeSignUpModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSignUpModal, closeSignUpModal } = SignUpSlice.actions;
export default SignUpSlice.reducer;
