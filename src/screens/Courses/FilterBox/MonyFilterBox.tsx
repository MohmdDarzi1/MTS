import { Box, Typography, Paper, IconButton, Slider, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React, { useState, useEffect } from 'react';
import { useGetRange } from '../../../Core/Services/api/FilterBox';

type CartCourseCost = {
  cost: number;
};

type CartCourseAllCost = {
  courseFilterDtos: CartCourseCost[];
  totalCount: number;
};

type MonyFilterBoxProps = {
  setPriceRange: (range: number[]) => void;
};

const MonyFilterBox: React.FC<MonyFilterBoxProps> = ({ setPriceRange }) => {
  const [priceRange, setLocalPriceRange] = useState<number[]>([0, 100000000]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data, isLoading, error, refetch } = useGetRange(priceRange[1], priceRange[0]);

  useEffect(() => {
    if (data && data.courseFilterDtos.length > 0) {
      const allCosts = data.courseFilterDtos.map(course => course.cost);
      const minCost = Math.min(...allCosts);
      const maxCost = Math.max(...allCosts);
      setPriceRange([minCost, maxCost]);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setErrorMessage(`خطا در بارگذاری اطلاعات قیمت: ${error.message}`);
    }
  }, [error]);

  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    setLocalPriceRange(newValue as number[]);
  };

  const handlePriceRangeChangeCommitted = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      const newCostUp = newValue[1];
      const newCostDown = newValue[0];

      if (newCostDown < newCostUp) {
        setLocalPriceRange(newValue);
        refetch();
      } else {
        setErrorMessage("حداقل قیمت باید کمتر از حداکثر قیمت باشد.");
      }
    }
  };

  const toggleFilterBox = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Box sx={{ width: '320px', marginTop: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6" component="div">فیلتر قیمت</Typography>
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
          <Box sx={{ marginTop: 4 }}>
            <Slider
              value={priceRange}
              onChange={handlePriceRangeChange}
              onChangeCommitted={handlePriceRangeChangeCommitted}
              valueLabelDisplay="auto"
              min={0}
              max={10000000}
              step={10}
              sx={{ color: "#1976d2" }}
            />
            <Typography>
              قیمت از {priceRange[0]} تومان تا {priceRange[1]} تومان
            </Typography>
          </Box>
        </Paper>
      )}

      <Snackbar
        open={Boolean(errorMessage)}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
        autoHideDuration={600}
      />
    </Box>
  );
};

export default MonyFilterBox;
