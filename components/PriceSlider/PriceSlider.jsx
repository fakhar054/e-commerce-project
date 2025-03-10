import React, { useState } from "react";
import { Slider } from "@mui/material";
import "./PriceSlider.css";

export default function PriceSlider() {
  const [value, setValue] = useState(50); // Single value state

  const handleChange = (event, newValue) => {
    setValue(newValue); // Directly set value
  };

  return (
    <>
      <div className="slider-container">
        <div className="slider-value">Price: $ {value}</div>
        <Slider
          className="custom-slider"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={2000}
        />
      </div>
    </>
  );
}
