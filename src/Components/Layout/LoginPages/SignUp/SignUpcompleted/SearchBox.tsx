import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import Completed from "../SignUpcompleted/completed";
import { RootState } from "../../../../../redux/Store/Store";
import { opencompletedModal } from "../../../../../redux/slice/completed";
import { useGetCompleted } from "../../../../../Core/Services/api/Auth";

const SearchBox = () => {
  const register = useGetCompleted();
  const dispatch = useDispatch();

  // تنظیمات و اعتبارسنجی با فرمیک و یوپ
  const formik = useFormik({
    initialValues: {
      gmail: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      gmail: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("وارد کردن ایمیل الزامی است"),
      password: Yup.string()
        .required("وارد کردن رمز عبور الزامی است")
        .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
        phoneNumber: Yup.string()
        .required("شماره تلفن الزامی است")
        .matches(/^[0-9]{11}$/, "شماره تلفن باید 11 رقم باشد"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      register.mutate(
        {
          phoneNumber: values.phoneNumber,
          gmail: values.gmail,
          password: values.password,
        },
        {
          onSuccess: (data) => {
            console.log("کد با موفقیت تایید شد:", data.message);
            dispatch(opencompletedModal());
          },
          onError: (error) => {
            console.error("خطا در تایید کد:", error);
          },
        }
      );

      // باز کردن مودال بعد از اعتبارسنجی موفق
      dispatch(opencompletedModal());
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography
        sx={{
          width: "90%",
          height: "70px",
          textAlign: "right",
          fontSize: "14px",
          color: "#555",
        }}
      >
        ایمیل و پسورد خود را وارد کنید
      </Typography>

      {/* فیلد ایمیل */}
      <TextField
        fullWidth
        id="gmail"
        name="gmail"
        placeholder="ایمیل را وارد کنید"
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
        value={formik.values.gmail}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.gmail && Boolean(formik.errors.gmail)}
        helperText={formik.touched.gmail && formik.errors.gmail}
      />

      {/* فیلد رمز عبور */}
      <TextField
        fullWidth
        id="password"
        name="password"
        type="password"
        placeholder="رمز عبور را وارد کنید"
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
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
      {/* {iscompleted && <Completed />} */}
    </Box>
  );
};

export default SearchBox;
