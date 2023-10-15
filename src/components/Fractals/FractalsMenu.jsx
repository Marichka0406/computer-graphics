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
  savedImage, 
}) {

  const isSmallScreen = useMediaQuery("(max-width:700px)");

  const hadleImageSaving = () => { //ось подія збереження
  console.log("Saved");
  };

  const handleNumberChange = (event) => {
    setIterationsNumber(event.target.value);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handleFractalSelect = () => {
    setCurrentTab(currentTab === "koch" ? "mandelbrot" : "koch");
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
        Save as ...
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
