import { React, useState, useEffect } from "react";
import kochImage from "./koch-image.jpeg";
import FractalsMenu from "./FractalsMenu";
import FractalField from "./FractalField";
import { Box } from "@mui/material";

function Fractals() {
  const [currentTab, setCurrentTab] = useState("koch");
  const [color, setSelectedColor] = useState("#000");
  const [iterationsNumber, setIterationsNumber] = useState(1);
  const [selectedKochFractal, setKochFractal] = useState("island");
  const [savedImage, setSavedImage] = useState(kochImage);

  useEffect(() => {
    setSelectedColor("#000");
    setIterationsNumber(0);
    setKochFractal("island");
  }, [currentTab]);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <FractalsMenu
        currentTab={currentTab}
        color={color}
        iterationsNumber={iterationsNumber}
        setCurrentTab={setCurrentTab}
        setSelectedColor={setSelectedColor}
        setIterationsNumber={setIterationsNumber}
        selectedKochFractal={selectedKochFractal}
        setKochFractal={setKochFractal}
        savedImage={savedImage}
      />
      <FractalField
        currentTab={currentTab}
        color={color}
        iterationsNumber={iterationsNumber}
        selectedKochFractal={selectedKochFractal}
        savedImage={savedImage}
        setSavedImage={setSavedImage}
      />
    </Box>
  );
}

export default Fractals;
