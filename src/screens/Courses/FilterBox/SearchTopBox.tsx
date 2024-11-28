import { Box, TextField } from "@mui/material";
import React from "react";
import { useGetSearchCard } from "../../../Core/Services/api/courses";

interface TopBoxProps {
  onSearchChange: (value: string) => void;
  searchValue: string;
}

const SearchTopBox: React.FC<TopBoxProps> = ({
  onSearchChange,
  searchValue,
}) => {
  const { data } = useGetSearchCard(searchValue);

  return (
    <Box>
      <TextField
        placeholder="جستجو"
        variant="outlined"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          width: "500px",
          height: "55px",
          backgroundColor: "#fff",
          borderRadius: "28px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          "& .MuiOutlinedInput-root": {
            borderRadius: "28px",
            "& fieldset": {
              borderColor: "#FFFFF",
            },
            "&:hover fieldset": {
              borderColor: "#FFFFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFFFf",
              borderWidth: "2px",
            },
          },
          "& input::placeholder": {
            color: "#000000",
            fontStyle: "italic",
          },
        }}
        InputProps={{
          startAdornment: (
            <Box sx={{ marginRight: "10px", color: "#2196F3" }}>🔍</Box>
          ),
        }}
      />
    </Box>
  );
};

export default SearchTopBox;
