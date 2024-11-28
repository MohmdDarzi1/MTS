import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  useTheme,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Percentages from "../Dashbord/Percentages";
import { useEditProfile, useUserProfile } from "../../../Core/Services/api/UserPanel";


const validationSchema = Yup.object({
  FName: Yup.string().required("نام الزامی است"),
  LName: Yup.string().required("نام خانوادگی الزامی است"),
  NationalCode: Yup.string().required("کد ملی الزامی است"),
  UserAbout: Yup.string().required("درباره من الزامی است"),
  HomeAdderess: Yup.string().required("آدرس الزامی است"),
  Gender: Yup.boolean().required("جنسیت الزامی است"),
  ReceiveMessageEvent: Yup.boolean().required("الزامی است"),
  BirthDay: Yup.date().nullable().required("تاریخ تولد الزامی است"),
  LinkdinProfile: Yup.string().required("لینک لینکدین الزامی است"),
  TelegramLink: Yup.string().required("لینک تلگرام الزامی است"),
});

const StyledForm: React.FC = () => {
  const { mutate, isError, error, isSuccess } = useEditProfile(); 
  const theme = useTheme();
  
  const formik = useFormik({
    initialValues: {
      FName: "",
      LName: "",
      NationalCode: "",
      UserAbout: "",
      HomeAdderess: "iran-tehran",
      Gender: false,
      ReceiveMessageEvent: false,
      TelegramLink: "",
      LinkdinProfile: "",
      BirthDay: "1980-10-10", 
      Latitude: "35.6892",
      Longitude: "51.3890"
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const token = localStorage.getItem("authToken"); 
      if (token) {
        mutate({ data: values, token });
      } else {
        console.error("توکن پیدا نشد. لطفا وارد شوید.");
      }
    },
  });

  const handleDateChange = (date: Date | null) => {
    formik.setFieldValue("BirthDay", date ? date.toISOString().split("T")[0] : "");
  };

  React.useEffect(() => {
    if (isError) {
      console.error("Error:", error);
    }
    if (isSuccess) {
      console.log("Success: Profile updated successfully!");
    }
  }, [isError, isSuccess, error]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          direction: "ltr",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#fff",
            borderRadius: "8px",
            direction: "rtl",
          }}
        >
          {/* نام و نام خانوادگی */}
          <Box sx={{ display: "flex", gap: "20px", width: "60%" }}>
            <FormControl sx={{ flex: 1 }}>
              <InputLabel
                shrink
                sx={{
                  fontSize: "18px",
                  color: theme.palette.mode === "dark" ? "fff" : "#333",
                  width: "130%",
                }}
              >
                نام
              </InputLabel>
              <TextField
                name="FName"
                placeholder="نام..."
                variant="outlined"
                value={formik.values.FName}
                onChange={formik.handleChange}
                error={
                  formik.touched.FName && Boolean(formik.errors.FName)
                }
                helperText={formik.touched.FName && formik.errors.FName}
                sx={{ mt: 2 }}
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <InputLabel
                shrink
                sx={{
                  fontSize: "18px",
                  color: theme.palette.mode === "dark" ? "fff" : "#333",
                  width: "130%",
                }}
              >
                نام خانوادگی
              </InputLabel>
              <TextField
                name="LName"
                placeholder="نام خانوادگی..."
                variant="outlined"
                value={formik.values.LName}
                onChange={formik.handleChange}
                error={
                  formik.touched.LName && Boolean(formik.errors.LName)
                }
                helperText={formik.touched.LName && formik.errors.LName}
                sx={{ mt: 2 }}
              />
            </FormControl>
          </Box>

          {/* درباره من */}
          <FormControl sx={{ width: "60%" }}>
            <InputLabel
              shrink
              sx={{
                fontSize: "18px",
                color: theme.palette.mode === "dark" ? "fff" : "#333",
                width: "130%",
              }}
            >
              درباره من
            </InputLabel>
            <TextField
              name="UserAbout"
              placeholder="درباره..."
              variant="outlined"
              value={formik.values.UserAbout}
              onChange={formik.handleChange}
              error={formik.touched.UserAbout && Boolean(formik.errors.UserAbout)}
              helperText={formik.touched.UserAbout && formik.errors.UserAbout}
              sx={{ mt: 2 }}
            />
          </FormControl>

          {/* شماره همراه و کد ملی */}
          <Box sx={{ display: "flex", gap: "20px", width: "60%" }}>
            <FormControl sx={{ flex: 1 }}>
              <InputLabel
                shrink
                sx={{
                  fontSize: "18px",
                  color: theme.palette.mode === "dark" ? "fff" : "#333",
                  width: "130%",
                }}
              >
                کد ملی
              </InputLabel>
              <TextField
                name="NationalCode"
                placeholder="کد ملی..."
                variant="outlined"
                value={formik.values.NationalCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.NationalCode &&
                  Boolean(formik.errors.NationalCode)
                }
                helperText={
                  formik.touched.NationalCode && formik.errors.NationalCode
                }
                sx={{ mt: 2 }}
              />
            </FormControl>
          </Box>

          {/* تاریخ تولد */}
          <FormControl sx={{ width: "30%", marginTop: 2 }}>
        <Typography sx={{ fontSize: "18px", marginBottom: "8px", fontWeight: "bold" }}>
          تاریخ تولد
        </Typography>
        <DatePicker
          selected={formik.values.BirthDay ? new Date(formik.values.BirthDay) : null}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="انتخاب تاریخ"
        />
        {formik.touched.BirthDay && formik.errors.BirthDay ? (
          <Typography color="error">{formik.errors.BirthDay}</Typography>
        ) : null}
      </FormControl>

          {/* جنسیت */}
          <FormControl component="fieldset" sx={{ width: "30%" }}>
            <Typography
              sx={{ fontSize: "18px", marginBottom: "8px", fontWeight: "bold" }}
            >
              جنسیت
            </Typography>
            <RadioGroup
              row
              name="Gender"
              value={formik.values.Gender}
              onChange={formik.handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="مرد" />
              <FormControlLabel value={false} control={<Radio />} label="زن" />
            </RadioGroup>
            {formik.touched.Gender && formik.errors.Gender ? (
              <Typography color="error">{formik.errors.Gender}</Typography>
            ) : null}
          </FormControl>

          {/* دریافت پیام */}
          <FormControl component="fieldset" sx={{ width: "30%" }}>
            <Typography
              sx={{ fontSize: "18px", marginBottom: "8px", fontWeight: "bold" }}
            >
              دریافت کننده
            </Typography>
            <RadioGroup
              row
              name="ReceiveMessageEvent"
              value={formik.values.ReceiveMessageEvent}
              onChange={formik.handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="بله" />
              <FormControlLabel value={false} control={<Radio />} label="خیر" />
            </RadioGroup>
            {formik.touched.ReceiveMessageEvent && formik.errors.ReceiveMessageEvent ? (
              <Typography color="error">
                {formik.errors.ReceiveMessageEvent}
              </Typography>
            ) : null}
          </FormControl>

          {/* ایمیل و آدرس */}
          <Box sx={{ display: "flex", gap: "20px", width: "60%" }}>
  
            <FormControl sx={{ flex: 1 }}>
              <InputLabel
                shrink
                sx={{
                  fontSize: "18px",
                  color: theme.palette.mode === "dark" ? "fff" : "#333",
                  width: "130%",
                }}
              >
                آدرس سکونت
              </InputLabel>
              <TextField
                name="HomeAdderess"
                placeholder="آدرس..."
                variant="outlined"
                value={formik.values.HomeAdderess}
                onChange={formik.handleChange}
                error={formik.touched.HomeAdderess && Boolean(formik.errors.HomeAdderess)}
                helperText={formik.touched.HomeAdderess && formik.errors.HomeAdderess}
                sx={{ mt: 2 }}
              />
            </FormControl>
          </Box>

          {/* تلگرام و لینکدین */}
          <Box sx={{ display: "flex", gap: "20px", width: "60%" }}>
            <FormControl sx={{ flex: 1 }}>
              <InputLabel
                shrink
                sx={{
                  fontSize: "18px",
                  color: theme.palette.mode === "dark" ? "fff" : "#333",
                  width: "130%",
                }}
              >
                تلگرام
              </InputLabel>
              <TextField
                name="TelegramLink"
                placeholder="تلگرام..."
                variant="outlined"
                value={formik.values.TelegramLink}
                onChange={formik.handleChange}
                error={
                  formik.touched.TelegramLink &&
                  Boolean(formik.errors.TelegramLink)
                }
                helperText={
                  formik.touched.TelegramLink && formik.errors.TelegramLink
                }
                sx={{ mt: 2 }}
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              <InputLabel
                shrink
                sx={{
                  fontSize: "18px",
                  color: theme.palette.mode === "dark" ? "fff" : "#333",
                  width: "130%",
                }}
              >
                آدرس لینکدین
              </InputLabel>
              <TextField
                name="LinkdinProfile"
                placeholder="لینکدین..."
                variant="outlined"
                value={formik.values.LinkdinProfile}
                onChange={formik.handleChange}
                error={
                  formik.touched.LinkdinProfile &&
                  Boolean(formik.errors.LinkdinProfile)
                }
                helperText={
                  formik.touched.LinkdinProfile && formik.errors.LinkdinProfile
                }
                sx={{ mt: 2 }}
              />
            </FormControl>
          </Box>

          {/* Submit Button */}
          <Button
          
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              marginTop: "20px",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            ارسال
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default StyledForm;
