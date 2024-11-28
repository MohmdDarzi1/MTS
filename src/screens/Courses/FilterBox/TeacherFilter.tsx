import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState } from 'react';
import { useLevel } from '../../../Core/Services/api/FilterBox';

interface TeacherFilterProps {
  selectedTeachers: string[];
  onTeacherChange: (teachers: string[]) => void;
}

const TeacherFilter: React.FC<TeacherFilterProps> = ({
  selectedTeachers,
  onTeacherChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useLevel();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    // بروزرسانی وضعیت انتخاب‌ها بر اساس چک باکس‌ها
    if (checked) {
      onTeacherChange([...selectedTeachers, name]); // اگر چک باکس انتخاب شود، نام معلم را اضافه کن
    } else {
      onTeacherChange(selectedTeachers.filter((teacher) => teacher !== name)); // اگر انتخاب نشود، نام معلم را حذف کن
    }
  };

  const toggleFilterBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}
      >
        <Typography variant="h6" component="div" sx={{ fontFamily: "yekanbold" }}>
          معلم‌ها
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
            {data?.map((level) => (
              <FormControlLabel
                key={level.levelName}
                control={
                  <Checkbox
                    name={level.levelName}
                    checked={selectedTeachers.includes(level.levelName)} // اطمینان از هماهنگی
                    onChange={handleCheckboxChange} // فراخوانی تابع به هنگام تغییر وضعیت چک باکس
                    sx={{
                      color: "#1976d2",
                      '&.Mui-checked': {
                        color: "#1976d2",
                      },
                    }}
                  />
                }
                label={<Typography sx={{ fontFamily: "yekanbold", color: "#555" }}>{level.levelName}</Typography>}
              />
            ))}
          </FormGroup>
        </Paper>
      )}
    </Box>
  );
};

export default TeacherFilter;
