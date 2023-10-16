import React from "react";
import { Box } from "@mui/material";
import KochFractal from "./KochSnowflake"
import MandelbrotSet from "./MandelbrotSetFractal";

function FractalField({ currentTab, color, iterationsNumber, selectedKochFractal, exponent, savedImage, setSavedImage}) {
    //savedImage і setSavedImage потрібно встановлювати кожен раз коли аимальовується нова картинка, тобто тоді, коли вона міняється, тому ці пропси 
    //тут треба буде міняти. Решту - використовувати.
    // Загалом якось так) Формат зображень я не дуже знаю, який потрібно, тому сам вибереш
    
  if (currentTab == "koch") {
    return (
      <Box
        sx={{
          paddingTop: 10,
          paddingLeft: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <KochFractal iterations={iterationsNumber} color={color} selectedKochFractal={selectedKochFractal}/>

        {/* <img src={savedImage} width="80%" alt="Fractal image" /> */}
      </Box>
    );
  }
  else if(currentTab == "mandelbrot"){
    return (
      <Box
        sx={{
          paddingTop: 10,
          paddingLeft: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

    <MandelbrotSet iterations={iterationsNumber} color={color} exponent={exponent}/>

        {/* <img src={savedImage} width="80%" alt="Fractal image" /> */}
      </Box>
    );
  }
}

export default FractalField;
