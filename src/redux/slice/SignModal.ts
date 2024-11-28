// import { createSlice } from "@reduxjs/toolkit";

// interface ModalState {
//     isOpen: boolean;
//   }
  
//   const initialState: ModalState = {
//     isOpen: false,
//   };

// const SignModal = createSlice({
//     name: 'LoginModal',
//     initialState,
//     reducers: {
//         openModal:(state)=>{
//             state.isOpen = true;
//         },
//         closeModal: (state) => {
//           state.isOpen = false;
//         },
//     }
// })
// export const { openModal, closeModal } = SignModal.actions;
// export default SignModal.reducer;
// redux/slice/SignModal.ts
// redux/slice/SignModal.ts
import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const signModalSlice = createSlice({
  name: 'signModal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = signModalSlice.actions;
export default signModalSlice.reducer;
