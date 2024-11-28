import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddReplayComment } from "../../../Core/Services/api/Comment";

interface SendCommentProps {
  id: string;
  courseId: string;
  onClose: () => void;
}

// تعریف شِما برای اعتبارسنجی
const validationSchema = Yup.object({
  replyTitle: Yup.string().required("عنوان ضروری است."),
  replyText: Yup.string().required("متن پاسخ ضروری است."),
});

const ReplyInput: React.FC<SendCommentProps> = ({ onClose, courseId, id }) => {
   
  const token = localStorage.getItem("authToken") || ""; 
  const addReplayComment = useAddReplayComment(token);

  const handleSubmit = async (values: { replyTitle: string; replyText: string }) => {
    const { replyTitle, replyText } = values;
  

  
    addReplayComment.mutate(
      { CommentId: id, CourseId: courseId, Title: replyTitle, Describe: replyText },
      {
        onSuccess: (data) => {
          console.log("نظر با موفقیت ارسال شد:", data);
          toast.success("پاسخ با موفقیت ارسال شد!");
          onClose();
        },
        onError: () => {
          toast.error("ارسال پاسخ با مشکل مواجه شد.");
        },
      }
    );
  };
  



  return (
    <Box p={3}>
      <Formik
        initialValues={{ replyTitle: "", replyText: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="replyTitle"
              label="عنوان"
              fullWidth
              margin="normal"
              helperText={<ErrorMessage name="replyTitle" />}
              error={Boolean(<ErrorMessage name="replyTitle" />)}
            />
            <Field
              as={TextField}
              name="replyText"
              label="متن پاسخ"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              helperText={<ErrorMessage name="replyText" />}
              error={Boolean(<ErrorMessage name="replyText" />)}
            />
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button onClick={onClose} color="secondary" disabled={isSubmitting}>
                انصراف
              </Button>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                ارسال
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ReplyInput;
