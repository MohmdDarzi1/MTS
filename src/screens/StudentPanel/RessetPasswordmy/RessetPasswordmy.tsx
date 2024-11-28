import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRessetPassword } from "../../../Core/Services/api/UserPanel";

const RessetPasswordmy = () => {
  const mutation = useRessetPassword({
    onSuccess: () => {
      console.log("Password reset successfully");
      alert("رمز عبور با موفقیت تغییر کرد");
    },
    onError: (error) => {
      console.error("Error resetting password:", error);
      alert("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    },
  });

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required("رمز عبور فعلی الزامی است")
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    newPassword: Yup.string()
      .required("رمز عبور جدید الزامی است")
      .min(6, "رمز عبور جدید باید حداقل ۶ کاراکتر باشد"),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Box
        sx={{
          width: "400px",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          تغییر رمز عبور
        </Typography>

        <Formik
          initialValues={{ currentPassword: "", newPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            mutation.mutate({
              oldPassword: values.currentPassword,
              newPassword: values.newPassword,
            });
            setSubmitting(false); // برای غیرفعال کردن حالت بارگذاری فرم
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* فیلد رمز عبور فعلی */}
                <Field
                  name="currentPassword"
                  as={TextField}
                  label="رمز عبور فعلی"
                  placeholder="رمز عبور فعلی را وارد کنید"
                  variant="outlined"
                  fullWidth
                  error={Boolean(mutation.isError)}
                  helperText={<ErrorMessage name="currentPassword" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />

                {/* فیلد رمز عبور جدید */}
                <Field
                  name="newPassword"
                  as={TextField}
                  label="رمز عبور جدید"
                  placeholder="رمز عبور جدید را وارد کنید"
                  variant="outlined"
                  fullWidth
                  error={Boolean(mutation.isError)}
                  helperText={<ErrorMessage name="newPassword" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />

                {/* دکمه ارسال */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  // disabled={isSubmitting || mutation.isLoading}
                  sx={{
                    backgroundColor: "#427EFC",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "10px",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                    },
                  }}
                >
                  {/* {mutation.isLoading ? "در حال ارسال..." : "ذخیره تغییرات"} */}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default RessetPasswordmy;
