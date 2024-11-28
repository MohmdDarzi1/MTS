// redux/store/Store.ts
import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "../slice/darkmodeSlice";
import SignModal from "../slice/SignModal";
import loginSlice from "../slice/Login";
import SignUpSlice from "../slice/SignUp";
import SignUpSendCode from "../slice/SignUpSendCode"; 
import LoginSendCode from "../slice/LoginSendCode"; 
import completedSignUpSlice from "../slice/completed"; 
import authReducer from '../slice/token';

export const store = configureStore({
  reducer: {
    signModal: SignModal,
    login: loginSlice,
    LoginCode: LoginSendCode,
    signUp: SignUpSlice,
    SignUpCode: SignUpSendCode, 
    darkMode: darkmodeSlice,
    completed:completedSignUpSlice,
    token: authReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
