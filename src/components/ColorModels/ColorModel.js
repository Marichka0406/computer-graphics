import React, { useState, useEffect, useRef } from "react";
import { MuiColorInput } from "mui-color-input";
//Image import ¯\_(ツ)_/¯
import img from "./cat_rainbow.jpg";

const ImageColorChanger = ({ url }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [brightness, setBrightness] = useState(100);

  const canvasRef = useRef(null);

  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

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

  useEffect(() => {
    const image = new Image();
    image.src = img//url;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const pixel = ctx.getImageData(x, y, 1, 1).data;

      setR(pixel[0]);
      setG(pixel[1]);
      setB(pixel[2]);

      let xyz = rgbToXyz(pixel[0], pixel[1], pixel[2]);

      setX(xyz.x);
      setY(xyz.y);
      setZ(xyz.z);
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
        data[i] += red; // Зміна червоного кольору
        data[i + 1] += green; // Зміна зеленого кольору
        data[i + 2] += blue; // Зміна синього кольору
      }

      ctx.putImageData(imageData, 0, 0);
    };

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [red, green, blue, brightness, url]);

  return (
    <div>
      <div>
        <label htmlFor="brightness">Brightness:</label>
        <input
          type="range"
          id="brightness"
          min="0"
          max="300"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
        {brightness}
      </div>
      <div>
        <label htmlFor="red">Red:</label>
        <input
          type="range"
          id="red"
          min="-255"
          max="255"
          value={red}
          onChange={(e) => setRed(Number(e.target.value))}
        />
        {red}
      </div>
      <div>
        <label htmlFor="green">Green:</label>
        <input
          type="range"
          id="green"
          min="-255"
          max="255"
          value={green}
          onChange={(e) => setGreen(Number(e.target.value))}
        />
        {green}
      </div>
      <div>
        <label htmlFor="blue">Blue:</label>
        <input
          type="range"
          id="blue"
          min="-255"
          max="255"
          value={blue}
          onChange={(e) => setBlue(Number(e.target.value))}
        />
        {blue}
      </div>
      <canvas ref={canvasRef}></canvas>
      <div>
      <MuiColorInput value={`RGB(${r}, ${g}, ${b})`}></MuiColorInput>
      </div>
      <div>
      XYZ(D65/2°) = {x} {y} {z}
      </div>
    </div>
  );
};

export default ImageColorChanger;
