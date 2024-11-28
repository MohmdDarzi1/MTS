import {
  Box,
  FormControl,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "& .MuiSelect-icon": {
    color: theme.palette.text.secondary,
  },
}));

interface TopBoxProps {
  onSelectChange: (value: number) => void;
  selectValue: number;
  onSortingChange: (sort: string) => void; 
  sortOptions: { value: string; label: string }[]; // New prop for sort options
  // onCourseLevelChange: (value: string) => void; 
}

const FilterTopBox: React.FC<TopBoxProps> = ({
  onSelectChange,
  selectValue,
  onSortingChange,
  sortOptions, // receive sort options
    // onCourseLevelChange, // دریافت پروپرتی جدید
}) => {
  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    onSelectChange(Number(event.target.value));
  };

  const handleSortingChange = (event: SelectChangeEvent<unknown>) => {
    onSortingChange(event.target.value as string);
  };
  // const handleCourseLevelChange = (newLevel: string) => {
  //   onCourseLevelChange(newLevel);
  // };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          width: "1200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-around",
            gap: "50px",
          }}
        >
          {/* فیلتر بر اساس نوع انتخاب */}
          {/* <FormControl sx={{ width: "25%" }}>
            <StyledSelect
              value={selectValue}
              onChange={handleSelectChange}
              IconComponent={KeyboardArrowDownRounded}
              aria-label="Filter by popularity"
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <MenuItem value={1}>محبوب ترین ها</MenuItem>
              <MenuItem value={2}>جدیدترین</MenuItem>
            </StyledSelect>
          </FormControl> */}

          {/* مرتب‌سازی */}
          <FormControl sx={{ width: "25%" }}>
            <StyledSelect
              value="" // Use controlled value
              onChange={handleSortingChange}
              IconComponent={KeyboardArrowDownRounded}
              aria-label="Sorting order"
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              {sortOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterTopBox;
