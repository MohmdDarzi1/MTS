import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
  };

const completedSignUpSlice = createSlice({
    name:"completed",
    initialState,
    reducers: {
        opencompletedModal : (state)=>{
            state.isOpen = true;

        },
        cloescompletedModal:(state)=> {
            state.isOpen = false
        }
    }
})

export const {opencompletedModal,cloescompletedModal} = completedSignUpSlice.actions
export default completedSignUpSlice.reducer