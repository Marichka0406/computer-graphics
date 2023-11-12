import React, { useEffect, useRef } from "react";
import { canvasStyles } from "./ImageCanvas.styles";
import { Box } from "@mui/material";

const ImageCanvas = ({
  img,
  brightness,
  red,
  green,
  blue,
  onColorChange,
  canvasRef,
}) => {
  useEffect(() => {
    const image = new Image();
    image.src = img;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const pixel = ctx.getImageData(x, y, 1, 1).data;
      onColorChange(pixel[0], pixel[1], pixel[2]);
    };

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.style.filter = `brightness(${brightness}%)`;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.addEventListener("mousemove", handleMouseMove);
      updateImageColor();
    };

    const updateImageColor = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        data[i] += red;
        data[i + 1] += green;
        data[i + 2] += blue;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [img, brightness, red, green, blue, onColorChange, canvasRef]);

  return (
    <Box sx={canvasStyles.imageWrapper}>
      <canvas ref={canvasRef} style={canvasStyles.canvas}></canvas>
    </Box>
  );
};

export default ImageCanvas;
