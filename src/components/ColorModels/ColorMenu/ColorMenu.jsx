import React from "react";
import Box from "@mui/material/Box";
import { MuiColorInput } from "mui-color-input";
import { menuStyles } from "./ColorMenu.styles.js";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const ColorMenu = ({
  posX,
  posY,
  sizeWidth,
  sizeHeight,
  handlePosXChange,
  handlePosYChange,
  handleSizeWidthChange,
  handleSizeHeightChange,
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

  const onPosXChange = (event) => {
    handlePosXChange(event.target.value);
  };

  const onPosYChange = (event) => {
    handlePosYChange(event.target.value);
  };

  const onSizeWidthChange = (event) => {
    handleSizeWidthChange(event.target.value);
  };
  
  const onSizeHeightChange = (event) => {
    handleSizeHeightChange(event.target.value);
  };

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
      <Box sx={menuStyles.buttonsWrapper}>
      <Button sx={menuStyles.button} onClick={handleImageUpload}>
        Choose file
      </Button>
      <Button sx={menuStyles.button} onClick={handleSaveAs}>
        Save as ...
      </Button>
      </Box>
      <Box sx={menuStyles.inputsWrapper}>
        <TextField
          type="number"
          label="Enter X"
          inputProps={{
            min: 0,
            max: 10000,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
          value={posX}
          onChange={onPosXChange}
        />
        <TextField
          type="number"
          label="Enter Y"
          inputProps={{
            min: 0,
            max: 10000,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
          value={posY}
          onChange={onPosYChange}
        />
      </Box>
      
      <Box sx={menuStyles.inputsWrapper}>
        <TextField
          type="number"
          label="Enter Width"
          inputProps={{
            min: 1,
            max: 10000,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
          value={sizeWidth}
          onChange={onSizeWidthChange}
        />
        <TextField
          type="number"
          label="Enter Height"
          inputProps={{
            min: 1,
            max: 10000,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
          value={sizeHeight}
          onChange={onSizeHeightChange}
        />
      </Box>

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
