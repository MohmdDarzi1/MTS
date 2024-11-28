import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import Completed from "../SignUpcompleted/completed";
import { RootState } from "../../../../../redux/Store/Store";
import { opencompletedModal } from "../../../../../redux/slice/completed";
import { useGetsignUpCode } from "../../../../../Core/Services/api/Auth";
import Completed from "../SignUpcompleted/Completed";
// import { RootState } from "../../../../redux/Store/Store";
// import SendCodeSignUp from "./SendCodeSignup/SendCode";
// import { openSignUpCodeModal } from "../../../../redux/slice/SignUpSendCode";

const SearchBox = () => {
  const signUpCode = useGetsignUpCode();
  
  const dispatch = useDispatch();

  // تنظیمات و اعتبارسنجی با فرمیک و یوپ
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      verifyCode:""
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required(" وارد کردن کد الزامی است")
        .matches(/^[0-9]{11}$/, "  باید 11 رقم باشد"),
        verifyCode: Yup.string()
        .required(" وارد کردن کد الزامی است")
        .matches(/^[0-9]{5}$/, "  باید 5 رقم باشد"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      signUpCode.mutate({
        phoneNumber: values.phoneNumber,
        verifyCode: values.verifyCode,
    }, {
        onSuccess: (data) => {
            console.log("کد با موفقیت تایید شد:", data.message);
            dispatch(opencompletedModal());
        },
        onError: (error) => {
            console.error("خطا در تایید کد:", error);
        }
    });
    

    },
    
  });

  const iscompleted = useSelector((state: RootState) => state.completed.isOpen);

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography
        sx={{
          width: "90%",
          textAlign: "right",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        دریافت کد
      </Typography>
      <Typography
        sx={{
          width: "90%",
          textAlign: "right",
          fontSize: "14px",
          color: "#555",
        }}
      >
        کد ارسال شده برای شما را وارد کنید
      </Typography>

      {/* فیلد شماره تلفن */}
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        placeholder="  شماره همراه را وارد کنید"
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />

      <TextField
        fullWidth
        id="verifyCode"
        name="verifyCode"
        placeholder="  کد را وارد کنید"
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
        value={formik.values.verifyCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.verifyCode && Boolean(formik.errors.verifyCode)}
        helperText={formik.touched.verifyCode && formik.errors.verifyCode}
      />


      {/* دکمه ارسال */}
      <Button
        type="submit"
        sx={{
          width: "100%",
          height: "50px",
          borderRadius: "50px",
          backgroundColor: "#FFC224",
          color: "#000",
          fontFamily: "yekanbold",
          fontSize: "21px",
          marginBottom: "15px",
          "&:hover": {
            backgroundColor: "#FFA500",
          },
        }}
      >
        تایید کد یکبار مصرف
      </Button>

      {/* مودال ارسال کد */}
      {iscompleted && <Completed />}
    </Box>
  );
};

export default SearchBox;
