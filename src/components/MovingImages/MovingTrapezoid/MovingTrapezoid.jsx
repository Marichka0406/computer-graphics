import React, { useState } from "react";
import TrapezoidMenu from "../TrapezoidMenu/TrapezoidMenu.jsx";
import TrapezoidArea from "../TrapezoidArea/TrapezoidArea.jsx";
import { styles } from "./MovingTrapezoid.style.js";
import { Box } from "@mui/material";

const numeric = require("numeric");

const MovingTrapezoid = () => {
  // Визначення координат трапеції
  const [points, setPoints] = useState({
    x: [1, 2, 3, 6, 1],
    y: [1, 3, 3, 1, 1],
    name: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 1"], //отута поправити треба напевно
  });

  // Коефіцієнт збільшення
  const [scale, setScale] = useState(1.0);

  // Кут повороту
  const [rotateDegree, setRotateDegree] = useState(0);

  // Точка для повороту навколо неї
  const [rotationPoint, setRotationPoint] = useState(0);

  const handlePointChange = (index, axis, value) => {
    points[axis][index] = value;

    const updatedPoints = {
      x: [...points.x],
      y: [...points.y],
      name: [...points.name],
    };

    setPoints(updatedPoints);
  };

  // Функція для створення матриці трансформації для масштабування та повороту
  function getTransformationMatrix(centerX, centerY, scale, angleInDegrees) {
    if('0' === scale || 0 === scale) {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
    }
    // Перетворення кута в радіани
    const angleInRadians = angleInDegrees * (Math.PI / 180);

    let cos = Math.round(Math.cos(angleInRadians) * 1000) / 1000;
    let sin = Math.round(Math.sin(angleInRadians) * 1000) / 1000;

    // Матриця трансформації для здійснення повороту відносно точки
    const rotationMatrix = [
      [cos, sin, 0],
      [-sin, cos, 0],
      [0, 0, 1],
    ];

    const scalingMatrix = [
      [scale, 0, 0],
      [0, scale, 0],
      [0, 0, 1],
    ];

    // Матриця трансформації для зміщення точки в центрі обертання
    const translationMatrixToCenter = [
      [1, 0, 0],
      [0, 1, 0],
      [centerX, centerY, 1],
    ];

    // Матриця трансформації для повернення точки назад на місце
    const translationMatrixFromCenter = [
      [1, 0, 0],
      [0, 1, 0],
      [-centerX, -centerY, 1],
    ];

    // Порядок застосування матриць: зміщення в центр, масштабування, поворот, зміщення назад
    const transformationMatrix = multiplyMatrices(
      translationMatrixToCenter,
      scalingMatrix,
      rotationMatrix,
      translationMatrixFromCenter
    );

    return transformationMatrix;
  }


  function getTransformedPoints(matrix, points) {
    // Додайте третю координату (однорідні координати)
    const homogeneousPoints = [
      [points[0].x, points[0].y, 1],
      [points[1].x, points[1].y, 1],
      [points[2].x, points[2].y, 1],
      [points[3].x, points[3].y, 1],
      [points[4].x, points[4].y, 1],
    ];
    
    // Помножте вектор на обернену матрицю
    const transformedPoint = numeric.dot(homogeneousPoints, matrix);

    // Поверніть координати точки
    return [
      { x: transformedPoint[0][0], y: transformedPoint[0][1] },
      { x: transformedPoint[1][0], y: transformedPoint[1][1] },
      { x: transformedPoint[2][0], y: transformedPoint[2][1] },
      { x: transformedPoint[3][0], y: transformedPoint[3][1] },
      { x: transformedPoint[4][0], y: transformedPoint[4][1] },
  ];
  }

  // Функція для множення матриць
  function multiplyMatrices(...matrices) {
    return matrices.reduce(
      (result, matrix) =>
        result.map((row, i) =>
          row.map(
            (_, j) =>
              matrix[i][0] * result[0][j] +
              matrix[i][1] * result[1][j] +
              matrix[i][2] * result[2][j]
          )
        ),
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]
    );
  }

  const handleRotateDegreeChange = (value) => {
    setRotateDegree(value);
  };

  const handleScaleChange = (value) => {
    setScale(value);
    if (0 === value || "" === value || !value) return;
  };

  const handleTransformOnClick = () => {
   // Point for rotation
   const x0 = points.x[rotationPoint];
   const y0 = points.y[rotationPoint];

   let transformedPoints = getTransformedPoints(
     getTransformationMatrix(x0, y0, scale, rotateDegree),
     [
       { x: points.x[0], y: points.y[0] },
       { x: points.x[1], y: points.y[1] },
       { x: points.x[2], y: points.y[2] },
       { x: points.x[3], y: points.y[3] },
       { x: points.x[4], y: points.y[4] },
   ]
   );

   for(let i = 0; i < transformedPoints.length; ++i){
     points.x[i] = transformedPoints[i].x;
     points.y[i] = transformedPoints[i].y;
   }

   const updatedPoints = {
     x: [...points.x],
     y: [...points.y],
     name: [...points.name],
   };

   setPoints(updatedPoints);
  };

  const handleRotatePointChange = (val) => {
    setRotationPoint(val);
  };

  return (
    <Box sx={styles.wrapper}>
      <TrapezoidMenu
        points={points}
        handlePointChange={handlePointChange}
        scale={scale}
        handleScaleChange={handleScaleChange}
        rotateDegree={rotateDegree}
        handleRotateDegreeChange={handleRotateDegreeChange}
        handleTransformOnClick={handleTransformOnClick}
        rotationPoint={rotationPoint}
        handleRotatePointChange={handleRotatePointChange}
      />
      <TrapezoidArea points={points} />
    </Box>
  );
};

export default MovingTrapezoid;
