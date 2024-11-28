import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  Paper,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React, { useState } from "react";
import { useGetType } from "../../../Core/Services/api/FilterBox";
interface FilterRadioProps {
  sortType: string[];
  setselectSortType: React.Dispatch<React.SetStateAction<string[]>>;
}
const FilterRadio: React.FC<FilterRadioProps> = ({ sortType, setselectSortType }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(""); // ذخیره گزینه انتخاب شده
  const [isOpen, setIsOpen] = useState<boolean>(false); // حالت باز یا بسته بودن

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value); 
    setselectSortType([event.target.value]);
  };

  const toggleFilterBox = () => {
    setIsOpen(!isOpen); // تغییر حالت باز و بسته
  };

  const { data } = useGetType();

  return (
    <Box sx={{ width: "320px", marginTop: 4 }}>
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
          نحوه برگذاری
        </Typography>
        <IconButton onClick={toggleFilterBox}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
          {/* آیکون باز و بسته */}
        </IconButton>
      </Box>

      {isOpen && (
        <Paper
          elevation={4} // اضافه کردن سایه
          sx={{
            // width: "100%",
            height: "auto",
            padding: 3,
            borderRadius: "12px", // گوشه‌های گردتر
            backgroundColor: "#f9f9f9", // تغییر رنگ پس‌زمینه
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // سایه ملایم‌تر
          }}
        >
          {data?.map((type) => (
            <RadioGroup value={selectedFilter} onChange={handleRadioChange}>
              <FormControlLabel
                      key={type.typeName}
                  value={type.typeName} 

                // value="Category1"
                control={
                  <Radio
                    sx={{
                      color: "#1976d2", // تغییر رنگ پیش‌فرض
                      "&.Mui-checked": {
                        color: "#1976d2", // تغییر رنگ رادیو تیک خورده
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontFamily: "yekanbold", color: "#555" }}>
                    {type.typeName}
                  </Typography>
                }
              />
            </RadioGroup>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default FilterRadio;
