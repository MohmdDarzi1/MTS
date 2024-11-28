import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Button, CardMedia, Typography, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetCourseComment } from "../../../Core/Services/api/courses";
import {
  useAddDisLikeCoureseComment,
  useAddLikeCoureseComment,
} from "../../../Core/Services/api/Comment";
import { toast } from "react-toastify";
import ReplyInput from "./ReplayInput";

interface Comment {
  id: string;
  courseId: string;
  parentId: string;
  title: string;
  describe: string;
  author: string;
  userId: number;
  insertDate: string;
  accept: boolean;
  acceptReplysCount: number;
  disslikeCount: number;
  likeCount: number;
  currentUserEmotion: "DISSLIKED" | "LIKED" | null;
  currentUserLikeId: string | null;
  pictureAddress: string;
}

interface CommentDetailsProps {
  courseId: string;
}

const CommentDetails: React.FC<CommentDetailsProps> = ({ courseId }) => {
  const token = localStorage.getItem("authToken");
  const [Addlike, setAddLike] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [hasDisLiked, setDisHasLiked] = useState<boolean>(false);

  const { mutate: LikeComment } = useAddLikeCoureseComment(token || "");
  const { mutate: DisLikeComment } = useAddDisLikeCoureseComment(token || "");
  const { data, isLoading, error } = useGetCourseComment(courseId);

  const [show, setShow] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState<boolean>(false);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setAddLike(data.likeCount);
      setDislikes(data.disslikeCount);
      setHasLiked(data.currentUserEmotion === "LIKED");
      setDisHasLiked(data.currentUserEmotion === "DISSLIKED");
    }
  }, [data]);

  if (isLoading) return <Typography>در حال بارگذاری...</Typography>;
  if (error) {
    console.error("Error fetching data:", error.message);
    return <Typography>خطا در بارگذاری اطلاعات</Typography>;
  }

  const comment: Comment[] = Array.isArray(data) ? data : [];
  const displayedComments = show ? comment : comment.slice(0, 2);

  const handleLikeComment = (CourseCommandId: string) => {
    if (!hasLiked) {
      if (hasDisLiked) {
        setDisHasLiked(false);
        setDislikes((prev) => Math.max(prev - 1, 0));
      }
      LikeComment(CourseCommandId, {
        onSuccess: () => {
          setAddLike((prev) => prev + 1);
          setHasLiked(true);
          toast.success("دوره با موفقیت پسندیده شد!");
        },
        onError: () => {
          toast.error("خطا در لایک کردن دوره!");
        },
      });
    } else {
      toast.info("قادر به ثبت دوباره پسندیدن دوره نمی باشید!");
    }
  };

  const handleDisLikeComment = (CourseCommandId: string) => {
    if (!hasDisLiked) {
      if (hasLiked) {
        setHasLiked(false);
        setAddLike((prev) => Math.max(prev - 1, 0));
      }
      DisLikeComment(CourseCommandId, {
        onSuccess: () => {
          setDislikes((prev) => prev + 1);
          setDisHasLiked(true);
          toast.success("دوره با موفقیت دیسلایک شد!");
        },
        onError: () => {
          toast.error("خطا در دیسلایک کردن دوره!");
        },
      });
    } else {
      toast.info("قادر به ثبت دوباره دیسلایک دوره نمی باشید!");
    }
  };

  const handleOpenReplyModal = (commentId: string) => {
    setSelectedCommentId(commentId);
    setIsReplyModalOpen(true);
  };

  const handleCloseReplyModal = () => {
    setIsReplyModalOpen(false);
    setSelectedCommentId(null);
  };

  return (
    <Box>
      {displayedComments.map((comment: Comment) => (
        <Box
          key={comment.id}
          sx={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#F7F7FA",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexDirection: "row",
            }}
          >
            <CardMedia
              component="img"
              src={comment.pictureAddress}
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CalendarMonthIcon
                  sx={{ fontSize: "18px", color: "#161439" }}
                />
                <Typography sx={{ fontSize: "14px", fontFamily: "yekanbold" }}>
                  {comment.insertDate}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "yekanbold",
                  fontSize: "30px",
                  color: "#333",
                  marginBottom: "10px",
                  position: "relative",
                  left: "650px",
                }}
              >
                نویسنده: {comment.author}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#555",
                  position: "relative",
                  left: "650px",
                }}
              >
                {comment.describe}
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50px",
                  }}
                >
                  <ThumbDownOffAltIcon
                    sx={{
                      fontSize: "16px",
                      color: hasDisLiked ? "red" : "inherit",
                    }}
                    onClick={() => handleDisLikeComment(comment.id)}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    {comment.disslikeCount}
                  </Typography>
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
                  <ThumbUpOffAltIcon
                    sx={{
                      fontSize: "16px",
                      color: hasLiked ? "green" : "inherit",
                    }}
                    onClick={() => handleLikeComment(comment.id)}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    {comment.likeCount}
                  </Typography>
                </Box>
                <Button onClick={() => handleOpenReplyModal(comment.id)}>پاسخ</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Typography
        sx={{
          width: "100%",
          height: "20px",
          fontSize: "30px",
          padding: "30px",
        }}
      >
        {comment.length} نظر
      </Typography>
      {!show && comment.length > 2 && (
        <Button
          onClick={() => setShow(true)}
          variant="contained"
          sx={{ marginTop: "20px" }}
        >
          نمایش بیشتر
        </Button>
      )}
      <Dialog open={isReplyModalOpen} onClose={handleCloseReplyModal}>
        {selectedCommentId && (
          <ReplyInput
            onClose={handleCloseReplyModal}
            courseId={courseId}
            id={selectedCommentId}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default CommentDetails;
