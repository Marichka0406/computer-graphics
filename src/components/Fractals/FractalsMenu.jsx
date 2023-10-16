import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { MuiColorInput } from "mui-color-input";
import Button from "@mui/material/Button";
import React from "react";
import RadioButtons from "./RadioButtons";
import useMediaQuery from "@mui/material/useMediaQuery";

function FractalsMenu({
  currentTab,
  color,
  iterationsNumber,
  setCurrentTab,
  setSelectedColor,
  setIterationsNumber,
  selectedKochFractal,
  setKochFractal,
  exponent,
  setExponent,
  savedImage, 
}) {

  const isSmallScreen = useMediaQuery("(max-width:700px)");

  const hadleImageSaving = () => {
    //ось подія збереження
    let canva = document.getElementById("canva");
    let canvasUrl = canva.toDataURL("image/jpeg", 0.5);
    console.log(canvasUrl);
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "download-this-canvas";
    createEl.click();
    createEl.remove();
  };

  const handleNumberChange = (event) => {
    setIterationsNumber(event.target.value);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handleFractalSelect = () => {
    setIterationsNumber(0);
    setExponent(2);
    setCurrentTab(currentTab === "koch" ? "mandelbrot" : "koch");
  };
  const handleExponentChange = (event) => {
    setExponent(event.target.value);  
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingTop: 12,
        height: "100%",
        backgroundColor: "rgba(241, 243, 255, 1)",
        width: isSmallScreen ? "45%" : "21%",
      }}
    >
      <Typography variant="h6" sx={{ marginLeft: 1 }}>
        {currentTab === "koch" ? "Koch Fractal" : "Mandelbrot Set"}
      </Typography>
      <Button
        sx={{
          backgroundColor: "rgba(59, 65, 148, 1)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(40, 42, 69, 1)",
          },
          padding: 2,
          borderRadius: 0,
          margin: 1,
          borderRadius: "3%",
        }}
        onClick={hadleImageSaving}
      >
        Save
      </Button>
      <Button
        onClick={handleFractalSelect}
        sx={{
          backgroundColor: "rgba(59, 65, 148, 1)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(40, 42, 69, 1)",
          },
          padding: 2,
          borderRadius: "3%",
          margin: 1,
        }}
      >
        {currentTab === "koch" ? "Mandelbrot Set" : "Koch Fractal"}
      </Button>

      
      <Typography sx={{ marginBottom: 1, textAlign: "center", fontSize: "14" }}>
        Number of iterations
      </Typography>

      {currentTab === "koch" && (
        <TextField
          type="number"
          label="Enter number"
          inputProps={{
            min: 1,
            max: 7,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: 1,
          }}
          value={iterationsNumber}
          onChange={handleNumberChange}
        />
      )}

      {/*Mandelbrot*/}
      {currentTab === "mandelbrot" && (
        <TextField
          type="number"
          label="Enter number"
          inputProps={{
            min: 1,
            max: 1000,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: 1,
          }}
          value={iterationsNumber}
          onChange={handleNumberChange}
        />
      )}

      {currentTab === "mandelbrot" && (
        <Typography sx={{ marginBottom: 1, textAlign: "center", fontSize: "14" }}>
          Exponent N
        </Typography>
      )}

      {currentTab === "mandelbrot" && (
        <TextField
          type="number"
          label="Enter exponent"
          inputProps={{
            min: 2,
            max: 10,
          }}
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: 1,
          }}
          value={exponent}
          onChange={handleExponentChange}
        />
      )}

      {currentTab === "koch" && (
        <RadioButtons
          selectedKochFractal={selectedKochFractal}
          setKochFractal={setKochFractal}
        />
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "14", margin: 1 }}>Color</Typography>
        <MuiColorInput
          sx={{ width: "100%", margin: 1, backgroundColor: "white" }}
          value={color}
          onChange={handleColorChange}
        />
      </Box>
    </Box>
  );
}

export default FractalsMenu;
