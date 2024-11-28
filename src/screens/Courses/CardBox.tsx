import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterBox from "./FilterBox/FilterBox";
import CoursePage from "./Pagenation/CoursePage";
import { useGetCourseAllCart } from "../../Core/Services/api/courses";
import Cart from "./Cart";
import Loader from "../../Components/Common/Loader";

export interface CourseData {
  courseId: number;
  title: string;
  technologyList: string;
  levelName: string;
  currentUserRateNumber: number;
  currentRegistrants: number;
  statusName: string;
  cost: number;
  lastUpdate: string;
  teacherName: string;
  dissLikeCount: number;
  tumbImageAddress: string;
  likeCount: number;
  totalCount: number;
}

interface CardBoxProps {
  courseLevelId: string;
  SortingCol: string;
  searchValue: string;
  selectValue: number;
  currentPage: number;
  ListTech: string;
  CourseTypeId: string;
  onPageChange: (page: number) => void;
}
// import { useGetTeachersList } from "../../Core/Services/api/teachers"; // Import your new hook

const CardBox: React.FC<CardBoxProps> = ({
  searchValue,
  selectValue,
  currentPage,
  onPageChange,
  SortingCol,
  courseLevelId,
  // ListTech,
  CourseTypeId,
}) => {
  const [page, setPage] = useState<number>(currentPage);
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]);
  const [couseLv, setCourseLv] = useState<string>(courseLevelId);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000000]);
  // const [selecttechnology,setselectTechnology]=useState<string>(ListTech)
  const [technology, setTechnology] = useState<string[]>([]);

  const [selectSortType, setselectSortType] = useState<string[]>([]);

  const [sortType, setSortType] = useState<string>(CourseTypeId);

  const { data, isLoading, error } = useGetCourseAllCart(
    page,
    SortingCol,
    courseLevelId,
    // ListTech,
    CourseTypeId
  );
  useEffect(() => {
    setSortType(sortType);
  }, [sortType]);

  useEffect(() => {
    setTechnology(technology);
  }, [technology]);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    onPageChange(page);
  }, [page, onPageChange]);

  useEffect(() => {
    setCourseLv(couseLv);
  }, [couseLv]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Loader/>
        {/* <CircularProgress /> */}
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography color="error">خطا در بارگذاری دوره‌ها</Typography>
      </Box>
    );
  }

  const filteredCourses = data?.courseFilterDtos.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const withinPriceRange =
      course.cost >= priceRange[0] && course.cost <= priceRange[1];

    const matchesTeacher =
      selectedTeachers.length === 0 ||
      selectedTeachers.includes(course.levelName);
    const technologyCourse =
      technology.length === 0 || technology.includes(course.technologyList);

    const sortTypeCourse =
      selectSortType.length === 0 || selectSortType.includes(course.statusName);

    return (
      matchesSearch &&
      withinPriceRange &&
      matchesTeacher &&
      technologyCourse &&
      sortTypeCourse
    );
  });

  const sortedCourses = filteredCourses?.sort((a, b) => {
    if (SortingCol === "asc") {
      return a.cost - b.cost;
    } else if (SortingCol === "desc") {
      return b.cost - a.cost;
    }
    return 0;
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
        width: "100%",
        flexDirection: "row",
        height: "500px",
      }}
    >
      <Box sx={{ maxWidth: "1200px" }}>
        <FilterBox
          sortType={selectSortType}
          setselectSortType={setselectSortType}
          setPriceRange={setPriceRange}
          selectedTeachers={selectedTeachers}
          setSelectedTeachers={setSelectedTeachers}
          setTechnology={setTechnology}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {sortedCourses && sortedCourses.length > 0 ? (
          sortedCourses.map((course) => (
            <Cart
              key={course.courseId}
              tumbImageAddress={course.tumbImageAddress}
              courseId={course.courseId}
              title={course.title}
              technologyList={course.technologyList}
              levelName={course.levelName}
              currentUserRateNumber={course.currentUserRateNumber}
              currentRegistrants={course.currentRegistrants}
              statusName={course.statusName}
              teacherName={course.teacherName}
              dissLikeCount={course.dissLikeCount}
              likeCount={course.likeCount}
              lastUpdate={course.lastUpdate}
              cost={course.cost}
              searchValue={searchValue}
            />
          ))
        ) : (
          <Typography>دوره‌ای برای نمایش وجود ندارد.</Typography>
        )}

        <CoursePage
          itemsPerPage={10}
          currentPage={page}
          totalCount={data?.totalCount || 0}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </Box>
    </Box>
  );
};

export default CardBox;
