import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react';
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useGetReplayComment } from '../../../Core/Services/api/courses';

interface CommentDetailsProps {
  id: string;
  courseId: string; // تغییر نام به courseId
}

const ReplayComment: React.FC<CommentDetailsProps> = ({ courseId, id }) => {
  const { data, isLoading, error } = useGetReplayComment(courseId, id);
  
  if (isLoading) return <Typography>در حال بارگذاری...</Typography>;
  if (error) {
    console.error("Error fetching replay comments:", error.message);
    return <Typography>خطا در بارگذاری نظرات ریپلای</Typography>;
  }

  // فرض می‌کنیم داده‌ها به صورت آرایه‌ای از نظرات ریپلای دریافت می‌شوند
  const replayComments = Array.isArray(data) ? data : [];

  return (
    <>
      {replayComments.map((comment) => (
        <Box
          key={comment.id}
          sx={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#F7F7FA",
            marginTop: "20px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
              flexDirection: "row",
            }}
          >
            <CardMedia
              component="img"
              src={comment.pictureAddress} // آدرس تصویر ریپلای
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginRight: "720px" }}>
                <CalendarMonthIcon sx={{ fontSize: "18px", color: "#161439" }} />
                <Typography sx={{ fontSize: "14px", fontFamily: "yekanbold" }}>
                  {comment.insertDate} {/* تاریخ ریپلای */}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "yekanbold",
                  fontSize: "30px",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                نویسنده: {comment.author} {/* نام نویسنده */}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                {comment.describe} {/* توضیحات ریپلای */}
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50px",
                    marginRight: "700px"
                  }}
                >
                  <ThumbDownOffAltIcon sx={{ fontSize: "16px" }} />
                  <Typography sx={{ fontSize: "14px" }}>{comment.disslikeCount}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50px",
                  }}
                >
                  <ThumbUpOffAltIcon sx={{ fontSize: "16px" }} />
                  <Typography sx={{ fontSize: "14px" }}>{comment.likeCount}</Typography>
                  
                </Box>
   
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ReplayComment;
