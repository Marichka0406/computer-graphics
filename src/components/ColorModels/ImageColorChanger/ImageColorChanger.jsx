import React, { useState } from "react";
import Box from "@mui/material/Box";
import ColorMenu from "../ColorMenu/ColorMenu";
import ImageCanvas from "../ImageCanvas/ImageCanvas";
import img from "../cat_rainbow.jpg";
import { styles } from "./ImageColorChanger.styles";

const ImageColorChanger = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [brightness, setBrightness] = useState(100);

  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  const handleRedChange = (value) => {
    setRed(value);
  };

  const handleGreenChange = (value) => {
    setGreen(value);
  };

  const handleBlueChange = (value) => {
    setBlue(value);
  };

  const handleColorChange = (r, g, b) => {
    setR(r);
    setG(g);
    setB(b);

    let xyz = rgbToXyz(r, g, b);

    setX(xyz.x);
    setY(xyz.y);
    setZ(xyz.z);
  };

  const rgbToXyz = (r, g, b) => {
    let var_R = r / 255;
    let var_G = g / 255;
    let var_B = b / 255;

    if (var_R > 0.04045) {
      var_R = Math.pow((var_R + 0.055) / 1.055, 2.4);
    } else {
      var_R = var_R / 12.92;
    }

    if (var_G > 0.04045) {
      var_G = Math.pow((var_G + 0.055) / 1.055, 2.4);
    } else {
      var_G = var_G / 12.92;
    }
    if (var_B > 0.04045) {
      var_B = Math.pow((var_B + 0.055) / 1.055, 2.4);
    } else {
      var_B = var_B / 12.92;
    }

    var_R = var_R * 100;
    var_G = var_G * 100;
    var_B = var_B * 100;

    let X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805;
    let Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722;
    let Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505;

    return { x: X, y: Y, z: Z };
  };

  return (
    <Box sx={styles.wrapper}>
      <ColorMenu
        brightness={brightness}
        red={red}
        green={green}
        blue={blue}
        onBrightnessChange={handleBrightnessChange}
        onRedChange={handleRedChange}
        onGreenChange={handleGreenChange}
        onBlueChange={handleBlueChange}
        rgbValue={`${r}, ${g}, ${b}`}
        xyzValues={`${x}, ${y}, ${z}`}
      />
      <ImageCanvas
        img={img}
        brightness={brightness}
        red={red}
        green={green}
        blue={blue}
        onColorChange={handleColorChange}
      />
    </Box>
  );
};

export default ImageColorChanger;
