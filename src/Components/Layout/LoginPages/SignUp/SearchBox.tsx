import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store/Store";
import SendCodeSignUp from "./SendCodeSignup/SendCode";
import { openSignUpCodeModal } from "../../../../redux/slice/SignUpSendCode";
import { useGetsignUp } from "../../../../Core/Services/api/Auth";

const SearchBox = () => {
  const dispatch = useDispatch();
  const SignUp = useGetsignUp();

  // تنظیمات و اعتبارسنجی با فرمیک و یوپ
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required("شماره تلفن الزامی است")
        .matches(/^[0-9]{11}$/, "شماره تلفن باید 11 رقم باشد"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      // ارسال درخواست API برای دریافت کد یکبار مصرف
      SignUp.mutate(values.phoneNumber, {
        onSuccess: () => {
          // باز کردن مودال بعد از موفقیت آمیز بودن درخواست API
          dispatch(openSignUpCodeModal());
        },
        onError: (error:Error) => {
          console.error("خطا در ارسال درخواست:", error);
        },
      });
    },
  });

  const isSendCodeSignUp = useSelector(
    (state: RootState) => state.SignUpCode.isOpen
  );

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
        ثبت نام
      </Typography>
      <Typography
        sx={{
          width: "90%",
          textAlign: "right",
          fontSize: "14px",
          color: "#555",
        }}
      >
        جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید
      </Typography>

      {/* فیلد شماره تلفن */}
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        placeholder="شماره موبایل خود را وارد کنید"
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
        disabled={SignUp.isPending}
      >
        {SignUp.isPending ? "در حال ارسال..." : "دریافت کد یکبار مصرف"}
      </Button>

      {/* مودال ارسال کد */}
      {isSendCodeSignUp && <SendCodeSignUp />}
    </Box>
  );
};

export default SearchBox;
