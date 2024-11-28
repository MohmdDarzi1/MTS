import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { closeLoginCodeModal } from "../../../../redux/slice/LoginSendCode";
import { useGetLoginPages } from "../../../../Core/Services/api/Auth";
import { useNavigate } from "react-router-dom";
import { closeLoginModal } from "../../../../redux/slice/Login";
import { closeModal } from "../../../../redux/slice/SignModal";

const SearchBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Login = useGetLoginPages();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("وارد کردن ایمیل الزامی است")
        .email("فرمت ایمیل صحیح نیست"),
      password: Yup.string()
        .required("رمز عبور الزامی است")
        .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
    }),
    onSubmit: async (values) => {
      console.log("Form Values:", values);
      try {
        // ارسال درخواست به سرور برای ثبت توکن
        await Login.mutateAsync({
          phoneOrGmail: values.email,
          password: values.password,
          rememberMe: true,
        });

        // توکن ثبت شده است و اکنون مودال باید بسته شود
        console.log("ورود موفقیت‌آمیز!");

        dispatch(closeLoginModal());
        dispatch(closeModal());
        // هدایت به صفحه اصلی
        navigate("/");
      } catch (error) {
        console.error("خطا در ارسال درخواست:", error);
      }
    },
  });

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
        خوش اومدید!
      </Typography>
      <Typography
        sx={{
          width: "90%",
          textAlign: "right",
          fontSize: "14px",
          color: "#555",
        }}
      >
        برای ورود به حساب خود ایمیل یا شماره موبایل و رمز عبور خود را وارد کنید
      </Typography>

      <TextField
        fullWidth
        id="email"
        name="email"
        placeholder="ایمیل خود را وارد کنید"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        type="password"
        placeholder="رمز عبور خود را وارد کنید"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{ marginBottom: "20px", borderRadius: "8px" }}
      />

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
          "&:hover": {
            backgroundColor: "#FFA500",
          },
        }}
      >
        ورود
      </Button>
    </Box>
  );
};

export default SearchBox;
