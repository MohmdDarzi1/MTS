import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DetailBox from "./DetailBox";
import RightBox from "./RightBox";
import CommentDetails from "./CommentDetails";
import SendComment from "./SendComment";
import CardCourse from "../../../Components/Common/CardCourse";
import { CourseDetails, useGetDetailCourses } from "../../../Core/Services/api/courses";
import { useParams } from "react-router-dom";
import Cart from "../Cart";

interface Course {
  // id:string
  courseId: string;
  title: string;
  description: string;
  teacherName: string;
  typeName: string;
  tumbImageAddress: string;
  cost: string; 
  levelName:string;
  commandCount:number;
  likeCount:number;
  dissLikeCount:number;
  lastUpdate:string;
  statusName:string;
  currentUserRateNumber:number
}
interface CardCourseProps {
//  id:string
  course: Course; // تعریف prop به نام course
}

const DetailCourse:React.FC <CardCourseProps> = () => {
  const { courseId } = useParams<{ courseId: string}>();
  console.log(courseId, "courseId");

  if (!courseId) {
    return <p>Course ID not found</p>;
  }

  const { data, isPending } = useGetDetailCourses(courseId);
  console.log(data, "dataDetail");

  if (isPending) {
    return <p>Loading...</p>;
  }



  if (!data) {
    return <p>No course data available</p>;
  }
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "150px", // تنظیم حداقل ارتفاع
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f6eff9",
          alignItems: "center",
          // position: "sticky"
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "yekanbold",
          }}
        >
          {/* حل تعارضات بین طراحان و مهندسان */}
          {data.googleTitle}
        </Typography>
        <Typography
          sx={{
            width: "1000px",
            minHeight: "20px", // تغییر به minHeight برای محتوای متنی
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          صفحه اصلی{" "}
          <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
          <Typography>دوره های آموزشی</Typography>
          <Typography
            sx={{
              minHeight: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
            <Typography sx={{ color: "#5751E1" }}>
              {/* حل تعارضات بین طراحان و مهندسان */}
              {data.title}
            </Typography>
          </Typography>
        </Typography>
      </Box>

      {/* باکس برای محتوا */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          minHeight: "500px", // حداقل ارتفاع برای محتوای داخل
          // overflowY: "auto", // اضافه کردن اسکرول عمودی
        }}
      >
        <Box
          sx={{
            width: "310px",
            minHeight: "842px",
            // border: "1px solid #ccc",
          }}
        >
          <RightBox data={data} />
        </Box>

        <Box
          sx={{
            width: "70%",
            // minHeight: "2500px", // حداقل ارتفاع برای محتوای اصلی
            // border: "1px solid #ccc",
          }}
        >
          <DetailBox data={data} />
          <CommentDetails courseId={courseId} />
          <SendComment  courseId={courseId}  />
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "200px",
                height: "50px",
                overflow: "hidden",
                marginTop: "20px", // فاصله بین المان‌ها
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  // height: "100%",
                  position: "absolute",
                  top: 0,
                  left: -10,
                  zIndex: 1,
                }}
                component="img"
                image="/src/assets/image/mts/Vector(1).png"
                // image={data.imageAddress}
                alt="background image"
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  fontSize: "18px",
                  fontFamily: "yekanbold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                دوره های مرتبط
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "500px",
                marginTop: "20px",
                display: "flex",
                justifyContent: "Center",
              }}
            >
{/* <Cart />
<Cart courseId={courseId}/>
<Cart courseId={courseId}/> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetailCourse;
