import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useAddComment } from "../../../Core/Services/api/Comment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface SendCommentProps {
  courseId: string;
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("لطفا عنوان را وارد کنید")
    .max(100, "عنوان نباید بیشتر از 100 کاراکتر باشد"),
  description: Yup.string()
    .required("لطفا توضیحات را وارد کنید")
    .max(500, "توضیحات نباید بیشتر از 500 کاراکتر باشد"),
});

const SendComment: React.FC<SendCommentProps> = ({ courseId }) => {
  const token = localStorage.getItem("authToken") || ""; // دریافت توکن
  const addComment = useAddComment(token);

  const handleSubmit = async (values: { title: string; description: string }) => {
    const { title, description } = values;
    addComment.mutate(
      { CourseId: courseId, Title: title, Describe: description }, // ارسال داده‌ها به صورت ساده
      {
        onSuccess: (data) => {
          console.log("نظر با موفقیت ارسال شد:", data);
        },
      }
    );
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Typography sx={{ fontFamily: "yekanbold", fontSize: "24px", color: "#333", marginBottom: "20px" }}>
        ارسال نظر
      </Typography>

      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form>
            <Box sx={{ marginBottom: "20px" }}>
              <Field
                value={values.title}
                as={TextField}
                fullWidth
                label="عنوان"
                name="title"
                variant="outlined"
                onChange={handleChange}
              />
              <ErrorMessage name="title" component="div" />
            </Box>

            <Box sx={{ marginBottom: "20px" }}>
              <Field
                value={values.description}
                as={TextField}
                fullWidth
                multiline
                rows={4}
                placeholder="نظر خود را بنویسید..."
                variant="outlined"
                name="description"
                onChange={handleChange}
              />
              <ErrorMessage name="description" component="div" />
            </Box>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#FFC224",
                color: "black",
                fontSize: "18px",
                fontFamily: "yekanbold",
                padding: "10px",
                borderRadius: "30px",
                "&:hover": { backgroundColor: "#FFA500" },
              }}
            >
              ارسال نظر
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SendComment;
