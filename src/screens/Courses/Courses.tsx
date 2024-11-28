import React, { useState } from "react";
import Header from "../../Components/Layout/Header/Header";
import { Box, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FilterTopBox from "./FilterBox/FilterTopBox";
import CardBox from "./CardBox";
import SearchTopBox from "./FilterBox/SearchTopBox";

const Courses = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingCol, setSortingCol] = useState<string>("asc");
  const [courseLevel, setCourseLevel] = useState<string>("");
  const [courseType, setCourseType] = useState<string>("");
  const [techList, setListTech] = useState<string>("");
  const sortOptions = [
    { value: "asc", label: "ارزان ترین قیمت" },
    { value: "desc", label: "بیشترین قیمت" },
  ];

  const handleSorting = (value: string) => {
    if (sortOptions.some((option) => option.value === value)) {
      setSortingCol(value);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSelectChange = (value: number) => {
    setSelectValue(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box sx={{ width: "100%", minHeight: "100vh", overflowX: "auto" }}>
        <Box
          sx={{
            width: "100%",
            minHeight: "150px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#f6eff9",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "yekanbold",
            }}
          >
            همه دوره ها
          </Typography>
          <Typography
            sx={{
              width: "400px",
              height: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            صفحه اصلی{" "}
            <KeyboardArrowLeftIcon sx={{ width: "20px", height: "20px" }} />
            <Typography sx={{ color: "#5751E1" }}>دوره های آموزشی</Typography>
          </Typography>
        </Box>

        <FilterTopBox
          sortOptions={sortOptions}
          onSortingChange={handleSorting}
          selectValue={selectValue}
          onSelectChange={handleSelectChange}
          // onCourseLevelChange={handleCourseLevel} // Adding course level change
        />

        <SearchTopBox
          onSearchChange={handleSearchChange}
          searchValue={searchValue}
        />

        <CardBox
        ListTech={techList}
          CourseTypeId={courseType}
          courseLevelId={courseLevel}
          SortingCol={sortingCol}
          currentPage={currentPage}
          searchValue={searchValue}
          selectValue={selectValue}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default Courses;
