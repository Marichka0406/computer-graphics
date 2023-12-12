import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import ColorMenu from "../ColorMenu/ColorMenu";
import ImageCanvas from "../ImageCanvas/ImageCanvas";
import catRainbowImg from "../cat_rainbow.jpg";
import { styles } from "./ImageColorChanger.styles";

const ImageColorChanger = () => {
  const [img, setImage] = useState(catRainbowImg);// Зображення, використовуване за замовчуванням
  const canvasRef = useRef(null);// Референс на canvas елемент

  const [posX, setPosX] = useState(0);// Позиція X зображення
  const [posY, setPosY] = useState(0); // Позиція Y зображення

  const [sizeWidth, setSizeWidth] = useState(600);// Ширина зображення
  const [sizeHeight, setSizeHeight] = useState(600);// Висота зображення

  const [red, setRed] = useState(0);// Компонент червоного кольору
  const [green, setGreen] = useState(0);// Компонент зеленого кольору
  const [blue, setBlue] = useState(0);// Компонент синього кольору
  const [brightness, setBrightness] = useState(0);// Яскравість зображення

  const [r, setR] = useState(0);// Компонент червоного кольору (RGB)
  const [g, setG] = useState(0);// Компонент зеленого кольору (RGB)
  const [b, setB] = useState(0);// Компонент синього кольору (RGB)

  const [x, setX] = useState(0);// Компонент X (XYZ)
  const [y, setY] = useState(0);// Компонент Y (XYZ)
  const [z, setZ] = useState(0);// Компонент Z (XYZ)

  // Функції-обробники для зміни розмірів зображення
  const handleSizeWidthChange = (value) => {
    setSizeWidth(value);
  };

  const handleSizeHeightChange = (value) => {
    setSizeHeight(value);
  };

  // Функції-обробники для зміни кольорів та яскравості зображення
  const handlePosXChange = (value) => {
    setPosX(value);
  };

  const handlePosYChange = (value) => {
    setPosY(value);
  };

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

   // Функція для визначення кольорів та значень XYZ
  const handleColorChange = (r, g, b) => {
    setR(r);
    setG(g);
    setB(b);

    let xyz = rgbToXyz(r, g, b);

    setX(xyz.x);
    setY(xyz.y);
    setZ(xyz.z);
  };

    // Функція для зміни вибраного зображення
  const handleFileChange = (image) => {
    setImage(image);
  };

  // Функція для скидання всіх параметрів зображення
  const handleReset = () => {
    setPosX(0);
    setPosY(0);
    setSizeWidth(0);
    setSizeHeight(0);
    setRed(0);
    setGreen(0);
    setBlue(0);
    setBrightness(0);
    setR(0);
    setB(0);
    setG(0);
    setX(0);
    setY(0);
    setZ(0);
  };

  const rgbToXyz = (r, g, b) => {
    // Переведення значень кольорів з діапазону 0-255 у діапазон 0-1
    let var_R = r / 255;
    let var_G = g / 255;
    let var_B = b / 255;

    // Корекція значень RGB у відповідності зі стандартом sRGB
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

    // Масштабування значень до діапазону від 0 до 100
    var_R = var_R * 100;
    var_G = var_G * 100;
    var_B = var_B * 100;

    // Обчислення компонентів X, Y та Z у моделі кольорів XYZ
    let X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805;
    let Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722;
    let Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505;

    // Повернення об'єкта з компонентами кольорів XYZ
    return { x: X, y: Y, z: Z };
  };

  return (
    <Box sx={styles.wrapper}>
      <ColorMenu
        posX={posX}
        posY={posY}
        sizeWidth={sizeWidth}
        sizeHeight={sizeHeight}
        handlePosXChange={handlePosXChange}
        handlePosYChange={handlePosYChange}
        handleSizeWidthChange={handleSizeWidthChange}
        handleSizeHeightChange={handleSizeHeightChange}
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
        onFileChange={handleFileChange}
        onReset={handleReset}
        img={img}
        canvasRef={canvasRef}
      />
      <ImageCanvas
        img={img}
        posX={posX}
        posY={posY}
        sizeWidth={sizeWidth}
        sizeHeight={sizeHeight}
        brightness={brightness}
        red={red}
        green={green}
        blue={blue}
        onColorChange={handleColorChange}
        canvasRef={canvasRef}
      />
    </Box>
  );
};

export default ImageColorChanger;
