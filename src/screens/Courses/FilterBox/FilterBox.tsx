// FilterBox.tsx
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React, { Dispatch, SetStateAction, useState } from "react";
import FilterRadio from "./FilterRadio";
import TeacherFilter from "./TeacherFilter";
import MonyFilterBox from "./MonyFilterBox";
import { useGetTechnologies } from "../../../Core/Services/api/FilterBox";

interface FilterBoxProps {
  sortType: string[]; // پراپرتی جدید برای حل مشکل
  setselectSortType: React.Dispatch<React.SetStateAction<string[]>>;
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  selectedTeachers: string[];
  setSelectedTeachers: React.Dispatch<React.SetStateAction<string[]>>;
  setTechnology: React.Dispatch<React.SetStateAction<string[]>>;

}

const FilterBox: React.FC<FilterBoxProps> = ({
  setPriceRange,
  selectedTeachers,
  setSelectedTeachers,
  setTechnology,
  setselectSortType,
  sortType,
}) => {
  const { data } = useGetTechnologies();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedFilters((prev) => [...prev, name]);
      setTechnology((prev) => [...prev, name]); // بروزرسانی technology با setTechnology
    } else {
      setSelectedFilters((prev) => prev.filter((filter) => filter !== name));
      setTechnology((prev) => prev.filter((filter) => filter !== name)); // حذف مورد از technology
    }
  };

  const handleTeacherChange = (teachers: string[]) => {
    setSelectedTeachers(teachers);
  };

  const toggleFilterBox = () => {
    setIsOpen(!isOpen);
  };
  const resetCheckboxes = () => {
    setSelectedFilters([]); 
    setTechnology([]); 
    // setPriceRange([])
    setSelectedTeachers([]);
    setselectSortType([]);
  
    
  };

  const Techcount = data?.slice(0,4)
  
  return (
    <Box sx={{ width: "320px", marginTop: 4, height: "1200px" }}>
      <Button
        variant="contained"
        color="error"
        onClick={resetCheckboxes}
        style={{ marginTop: "16px" }}
      >
        حذف تغییرات
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontFamily: "yekanbold" }}
        >
          دسته بندی ها
        </Typography>
        <IconButton onClick={toggleFilterBox}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      {isOpen && (
        <Paper
          elevation={4}
          sx={{
            height: "auto",
            padding: 3,
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FormGroup>
            {Techcount?.map((tec) => (
              <FormControlLabel
                key={tec.techName}
                control={
                  <Checkbox
                    name={tec.techName}
                    checked={selectedFilters.includes(tec.techName)}
                    onChange={handleCheckboxChange}
                    sx={{
                      color: "#1976d2",
                      "&.Mui-checked": {
                        color: "#1976d2",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontFamily: "yekanbold", color: "#555" }}>
                    {tec.techName}
                  </Typography>
                }
              />
            ))}
          </FormGroup>
        </Paper>
      )}
      <FilterRadio sortType={sortType} setselectSortType={setselectSortType} />
      <TeacherFilter
        selectedTeachers={selectedTeachers}
        onTeacherChange={handleTeacherChange}
      />{" "}
      {/* ارسال props به TeacherFilter */}
      <MonyFilterBox setPriceRange={setPriceRange} />
    </Box>
  );
};

export default FilterBox;
