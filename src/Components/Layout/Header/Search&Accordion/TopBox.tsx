import {
  Stack,
  TextField,
  FormControl,
  MenuItem,
  Box,
  Select,
} from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; // وارد کردن آیکون جستجو
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material";
import SearchBox from "../../../Common/SearchBox";
import { useTheme } from "@mui/material/styles"; // اضافه کردن useTheme

// StyledSelect definition
const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.text.primary, // رنگ متن بر اساس تم
  backgroundColor: theme.palette.background.paper, // رنگ پس‌زمینه بر اساس تم
  "& .MuiSelect-icon": {
    color: theme.palette.text.primary, // رنگ آیکون بر اساس تم
  },
}));

interface TopBoxProps {
  onSearchChange: (value: string) => void;
  searchValue: string;
  onSelectChange: (value: number) => void;
  selectValue: number;
}

const TopBox: React.FC<TopBoxProps> = ({
  onSearchChange,
  searchValue,
  onSelectChange,
  selectValue,
}) => {
  const theme = useTheme(); // دسترسی به تم
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    onSelectChange(Number(event.target.value)); 
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalSearchValue(value);
    onSearchChange(value); 
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: { lg: "56px", md: "45px", sm: "35px", xs: "25px" },
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", 
        padding: "0 16px", // Padding اضافی
        backgroundColor: theme.palette.background.default, // رنگ پس‌زمینه بر اساس تم
        transition: "0.3s ease", // انیمیشن ملایم
        "&:hover": {
          boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.3)", // سایه در hover
        },
      }}
      flexDirection={"row-reverse"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <SearchBox
        localSearchValue={localSearchValue}
        handleSearchChange={handleSearchChange}
      />

 
    </Stack>
  );
};

export default TopBox;
