import React from "react";
import Box from "@mui/material/Box";
import { MuiColorInput } from "mui-color-input";
import { menuStyles } from "./ColorMenu.styles.js";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ColorMenu = ({
  brightness,
  red,
  green,
  blue,
  onBrightnessChange,
  onRedChange,
  onGreenChange,
  onBlueChange,
  rgbValue,
  xyzValues,
  img,
  onFileChange,
  canvasRef,
  onReset
}) => {
  const [x, y, z] = xyzValues.split(", ");

  const handleImageUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          onFileChange(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  };

  const handleSaveAs = () => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      const canvas = canvasRef.current;
      const a = document.createElement("a");
      a.download = "download.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
  };

  return (
    <Box sx={menuStyles.wrapper}>
      <Button sx={menuStyles.button} onClick={handleImageUpload}>
        Choose file
      </Button>
      <Button sx={menuStyles.button} onClick={handleSaveAs}>
        Save as ...
      </Button>
      <Box>
        <Typography sx={menuStyles.title}>Brightness</Typography>
        <input
          type="range"
          min="-100"
          max="100"
          value={brightness}
          onChange={(e) => onBrightnessChange(Number(e.target.value))}
          style={menuStyles.brightnessSlider}
        />
        {brightness}
      </Box>
      <Box>
        <Typography sx={menuStyles.title}>Color</Typography>
        <Box>
          <label htmlFor="red" style={menuStyles.title}>
            Red:
          </label>
          <input
            type="range"
            id="red"
            min="-255"
            max="255"
            value={red}
            onChange={(e) => onRedChange(Number(e.target.value))}
            style={menuStyles.sliderRed}
          />
          {red}
        </Box>
        <Box>
          <label htmlFor="green">Green:</label>
          <input
            type="range"
            id="green"
            min="-255"
            max="255"
            value={green}
            onChange={(e) => onGreenChange(Number(e.target.value))}
            style={menuStyles.sliderGreen}
          />
          {green}
        </Box>
        <Box>
          <label htmlFor="blue">Blue:</label>
          <input
            type="range"
            id="blue"
            min="-255"
            max="255"
            value={blue}
            onChange={(e) => onBlueChange(Number(e.target.value))}
            style={menuStyles.sliderBlue}
          />
          {blue}
        </Box>
      </Box>
      <Box>
        <Typography sx={menuStyles.title}>RGB</Typography>
        <MuiColorInput sx={menuStyles.input} value={`rgb(${rgbValue})`} disabled={true}/>
      </Box>
      <Box>
        <Typography sx={menuStyles.title}>XYZ</Typography>
        <Box sx={menuStyles.xyzWrapper}>
          <Typography>X: {x}</Typography>
        </Box>
        <Box sx={menuStyles.xyzWrapper}>
          <Typography>Y: {y}</Typography>
        </Box>
        <Box sx={menuStyles.xyzWrapper}>
          <Typography>Z: {z}</Typography>
        </Box>
      </Box> 
      <Button sx={menuStyles.button} onClick={onReset}>
        Reset
      </Button>    
    </Box>
  );
};

export default ColorMenu;
