import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // برای استفاده از اکشن‌ها
import { closeModal } from '../../../../../redux/slice/SignModal';

const SearchBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // برای فراخوانی اکشن‌ها

  // تنظیمات و اعتبارسنجی با فرمیک و یوپ
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required(' وارد کردن کد الزامی است')
        .matches(/^[0-9]{5}$/, '  باید 5 رقم باشد'),
    }),
    onSubmit: (values) => {
      // اینجا می‌توانید درخواست خود را ارسال کنید
      console.log('Form Values:', values);
    },
  });

  // هندل کردن کلیک روی دکمه
  const handleButtonClick = () => {
    // فراخوانی اکشن برای بستن مودال
    dispatch(closeModal());
    // نویگیت کردن به صفحه studentPanel
    navigate("/studentPanel");
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography
        sx={{
          width: "90%",
          height: "50px",
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
          height: "70px",
          textAlign: "right",
          fontSize: "14px",
          color: "#555",
        }}
      >
        کدی که برای شما ارسال شد را اینجا وارد کنید
      </Typography>

      {/* فیلد شماره تلفن */}
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        placeholder=" کد را وارد کنید"
        sx={{ marginBottom: "15px", borderRadius: "8px" }}
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />

      {/* دکمه ارسال */}
      <Button
        onClick={handleButtonClick} // هندل کردن کلیک
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
        ! تایید کد یک بار مصرف
      </Button>
    </Box>
  );
}

export default SearchBox;
