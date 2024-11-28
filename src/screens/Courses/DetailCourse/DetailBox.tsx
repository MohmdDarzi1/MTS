import { Box, CardMedia, Checkbox, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  CourseDetails,
  useAddCourseToFavorites,
  useCourseRating,
  useDisLikeForCourse,
  useLikeForCourse,
} from "../../../Core/Services/api/courses";
import moment from "moment";
import "moment-jalaali";
import {
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
} from "@mui/icons-material"; // Import ThumbUp and ThumbDown
import { toast } from "react-toastify";
// import { useQuery, useMutation, useQueryClient } from "react-query";
interface DetailBoxProps {
  data: CourseDetails;
}

const DetailBox: React.FC<DetailBoxProps> = ({ data }) => {
  const token = localStorage.getItem("authToken");
  const { mutate: likeCourse } = useLikeForCourse(data.courseId, token || "");
  const { mutate: DislikeCourse } = useDisLikeForCourse(
    data.courseId,
    token || ""
  );
  const {
    mutate,
    data: favoriteData,
    isSuccess,
    error,
  } = useAddCourseToFavorites(data.courseId, token || "");
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isUserFavorite);
  const [likes, setLikes] = useState<number>(data.likeCount || 0);
  const [dislikes, setDislikes] = useState<number>(data.dissLikeCount || 0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [hasDisLiked, setDisHasLiked] = useState<boolean>(false);

  const [courseRate, setCourseRate] = useState<number>(data.currentRate || 0);
  const { mutate: rateCourse, setRateNumber } = useCourseRating(
    data.courseId,
    token || ""
  );

  const [value, setValue] = React.useState<number | null>(courseRate);

  useEffect(() => {
    if (isSuccess && favoriteData) {
      setIsFavorite(favoriteData.id === data.courseId);
      if (!isFavorite) {
        toast.success("دوره به لیست علاقه‌مندی‌ها اضافه شد!");
      }
    }

    if (error) {
      const errorResponse = error as any;
      if (errorResponse.response?.status === 400) {
        toast.error("دوره قبلاً در لیست علاقه‌مندی‌ها وجود دارد!");
      }
    }
  }, [isSuccess, favoriteData, data.courseId, error, isFavorite]);

  useEffect(() => {
    // بارگذاری اطلاعات از localStorage هنگام بارگذاری صفحه
    const storedFavorite = localStorage.getItem(`isFavorite-${data.courseId}`);
    const storedLikes = localStorage.getItem(`likes-${data.courseId}`);
    const storedDislikes = localStorage.getItem(`dislikes-${data.courseId}`);
    const storedHasLiked = localStorage.getItem(`hasLiked-${data.courseId}`);
    const storedHasDisLiked = localStorage.getItem(
      `hasDisLiked-${data.courseId}`
    );
    const storedRate = localStorage.getItem(`courseRate-${data.courseId}`);

    if (storedFavorite) {
      setIsFavorite(storedFavorite === "true");
    }

    if (storedLikes) {
      setLikes(Number(storedLikes));
    }
    if (storedDislikes) {
      setDislikes(Number(storedDislikes));
    }
    if (storedHasLiked) {
      setHasLiked(storedHasLiked === "true");
    }
    if (storedHasDisLiked) {
      setDisHasLiked(storedHasDisLiked === "true");
    }
    if (storedRate) {
      setCourseRate(Number(storedRate));
      setValue(Number(storedRate));
    }
  }, [data.courseId]);

  const handleFavoriteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFavorite(event.target.checked);
    mutate(data.courseId);
    localStorage.setItem(
      `isFavorite-${data.courseId}`,
      event.target.checked.toString()
    );
  };

  const handleLike = async () => {
    if (!hasLiked) {
      if (hasDisLiked) {
        setDisHasLiked(false);
        setDislikes((prev) => prev - 1);
        localStorage.setItem(
          `dislikes-${data.courseId}`,
          (dislikes - 1).toString()
        );
      }
      try {
        await likeCourse();
        setLikes((prev) => prev + 1);
        localStorage.setItem(`likes-${data.courseId}`, (likes + 1).toString());
        setHasLiked(true);
        localStorage.setItem(`hasLiked-${data.courseId}`, "true");
        toast.success("دوره لایک شد!");
      } catch (error) {
        toast.error("خطا در لایک کردن دوره!");
      }
    } else {
      toast.info("قادر به ثبت دوباره پسندیدن دوره نمی باشید!");
    }
  };

  const handleDislike = async () => {
    if (!hasDisLiked) {
      if (hasLiked) {
        setHasLiked(false);
        setLikes((prev) => prev - 1);
        localStorage.setItem(`likes-${data.courseId}`, (likes - 1).toString());
      }
      try {
        await DislikeCourse();
        setDislikes((prev) => prev + 1);
        localStorage.setItem(
          `dislikes-${data.courseId}`,
          (dislikes + 1).toString()
        );
        setDisHasLiked(true);
        localStorage.setItem(`hasDisLiked-${data.courseId}`, "true");
        toast.success("دوره نظر منفی گرفت !");
      } catch (error) {
        toast.error("خطا در نظر منفی دادن");
      }
    } else {
      toast.info("قادر به ثبت دوباره  دوره نمی باشید!");
    }
  };

  const lastUpdateDate = data
    ? moment(data.insertDate).locale("fa").format("YYYY/MM/DD")
    : "";

  const handleRate = async (
    event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    if (newValue !== null) {
      setRateNumber(newValue);
      setValue(newValue);
      localStorage.setItem(`courseRate-${data.courseId}`, newValue.toString());
      try {
        await rateCourse();
        toast.success("امتیاز شما ثبت شد!");
      } catch {
        toast.error("خطا در ثبت امتیاز");
      }
    }
  };
  const handleImage = ()=> {
if (!data.imageAddress  || data.imageAddress === "testimg") {
  return  "../src/assets/image/mts/courses_details.jpg.png"
}
return data.imageAddress
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <CardMedia
      image={handleImage()}
        sx={{
          width: "100%",
          height: "400px",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Rating
            name="course-rating"
            value={value}

            onChange={handleRate}
          />
          <Typography
            sx={{ fontFamily: "yekanbold", fontSize: "24px", color: "#161439" }}
          >
            {data.currentRate}
          </Typography>
          <Checkbox
            checked={isFavorite}
            onChange={handleFavoriteChange}
            color="error"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: "yekanbold",
            fontSize: "26px",
            padding: "10px 20px",
            backgroundColor: "#EFEFF1",
            borderRadius: "50px",
            color: "#161439",
          }}
        >
          {data.miniDescribe?.slice(0, 50)}...
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontFamily: "yekanbold",
            textAlign: "right",
            color: "#161439",
          }}
        >
          {data.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <ThumbUp
            onClick={handleLike}
            sx={{ cursor: "pointer", color: "#4CAF50" }}
          />
          <Typography>{likes}</Typography>
          <ThumbDown
            onClick={handleDislike}
            sx={{ cursor: "pointer", color: "#F44336" }}
          />
          <Typography>{dislikes}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          justifyContent: "right",
          marginBottom: "20px",
        }}
      >
        <CardMedia
          image="src/assets/image/mts/comment01.png"
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ fontSize: "18px", fontFamily: "yekanbold" }}>
          توسط {data.teacherName}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "15px",
          justifyContent: "right",
          color: "#161439",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <CalendarMonthIcon sx={{ fontSize: "18px" }} />
          <Typography sx={{ fontSize: "16px", fontFamily: "yekanbold" }}>
            {lastUpdateDate}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <CalendarMonthIcon sx={{ fontSize: "18px" }} />
          <Typography sx={{ fontSize: "16px", fontFamily: "yekanbold" }}>
            دانشجو {data.capacity}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailBox;
