import React, { useEffect } from "react";
import { canvasStyles } from "./ImageCanvas.styles";
import { Box } from "@mui/material";

const ImageCanvas = ({
  img,
  posX,
  posY,
  sizeWidth,
  sizeHeight,
  brightness,
  red,
  green,
  blue,
  onColorChange,
  canvasRef,
}) => {
  useEffect(() => {
    // Завантаження зображення під час монтування компоненти та налаштування контексту малювання
    const image = new Image();
    image.src = img;

    const MAX_IMAGE_HEIGHT = 600;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Отримання даних про кольори при наведенні миші
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const pixel = ctx.getImageData(x, y, 1, 1).data;
      onColorChange(pixel[0], pixel[1], pixel[2]);
    };

    // Застосування яскравості до зображення
    const applyBrightness = (data, brightness) => {
      for (var i = 0; i < data.length; i+= 4) {
        data[i] += 255 * (brightness / 100);
        data[i+1] += 255 * (brightness / 100);
        data[i+2] += 255 * (brightness / 100);
      }
    };
    
    image.onload = () => {
      let k = (image.height / MAX_IMAGE_HEIGHT);

      // Встановлення розмірів канвасу та відображення зображення
      canvas.height = image.height / k;
      canvas.width = image.width / k;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.addEventListener("mousemove", handleMouseMove);
      updateImageColor();

      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      ctx.putImageData(imageData, 0, 0);
    };

    const updateImageColor = () => {
      // Оновлення кольорів зображення на канвасі
      if(parseInt(sizeHeight) === 0 || sizeHeight === "0" || sizeHeight === "00") return;
      if(parseInt(sizeWidth) === 0 || sizeWidth === "0" || sizeWidth === "00") return;
      
      const imageData = ctx.getImageData(posX, posY, sizeWidth, sizeHeight);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        data[i] += red;
        data[i + 1] += green;
        data[i + 2] += blue;
      }

      applyBrightness(imageData.data, brightness);

      ctx.putImageData(imageData, posX, posY);
    };

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [img, posX, posY, sizeHeight, sizeWidth, brightness, red, green, blue, onColorChange, canvasRef]);

  return (
    // Повернення канвасу для відображення зображення
    <Box sx={canvasStyles.imageWrapper}>
      <canvas ref={canvasRef} style={canvasStyles.canvas}></canvas>
    </Box>
  );
};

export default ImageCanvas;
