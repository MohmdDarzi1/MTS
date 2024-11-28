// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isOpen: false,
// };

// const SignUpSendCodeSlice = createSlice({
//   name: 'SignUpCode',
//   initialState,
//   reducers: {
//     openSignUpCodeModal: (state) => {
//       state.isOpen = true;
//     },
//     closeSignUpCodeModal: (state) => {
//       state.isOpen = false;
//     },
//   },
// });

// export const { openSignUpCodeModal, closeSignUpCodeModal } = SignUpSendCodeSlice.actions;
// export default SignUpSendCodeSlice.reducer; // اینجا باید ریدوسر را به صورت پیش‌فرض صادر کنید

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const signUpSendCodeSlice = createSlice({
  name: 'SignUpCode',
  initialState,
  reducers: {
    openSignUpCodeModal(state) {
      state.isOpen = true;
    },
    closeSignUpCodeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openSignUpCodeModal, closeSignUpCodeModal } = signUpSendCodeSlice.actions;

export default signUpSendCodeSlice.reducer;
