import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const numeric = require('numeric');

const MovingTrapezoid = () => {
    // Визначення координат трапеції
    const [points, setPoints] = useState({
        x: [1, 2, 3, 6, 1],
        y: [1, 3, 3, 1, 1],
        name: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 1']
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
            name: [...points.name]
        };

        setPoints(updatedPoints);
    };

    // Функція для створення матриці трансформації для масштабування та повороту
    function getTransformationMatrix(centerX, centerY, scale, angleInDegrees) {
        // Перетворення кута в радіани
        const angleInRadians = angleInDegrees * (Math.PI / 180);

        let cos = Math.round(Math.cos(-angleInRadians) * 1000) / 1000;
        let sin = Math.round(Math.sin(-angleInRadians) * 1000) / 1000;

        // Матриця трансформації для здійснення повороту відносно точки
        const rotationMatrix = [
            [cos, -sin, 0],
            [sin, cos, 0],
            [0, 0, 1],
        ];

        const scalingMatrix = [
            [1/scale, 0, 0],
            [0, 1/scale, 0],
            [0, 0, 1],
          ];

        // Матриця трансформації для зміщення точки в центрі обертання
        const translationMatrixToCenter  = [
            [1, 0, -centerX],
            [0, 1, -centerY],
            [0, 0, 1],
        ];

        // Матриця трансформації для повернення точки назад на місце
        const translationMatrixFromCenter = [
            [1, 0, centerX],
            [0, 1, centerY],
            [0, 0, 1],
        ];

        // Порядок застосування матриць: зміщення в центр, масштабування, поворот, зміщення назад
        const transformationMatrix = multiplyMatrices(
            translationMatrixToCenter,
            scalingMatrix,
            rotationMatrix,
            translationMatrixFromCenter,
        );

        return transformationMatrix;
    }

    function getTransformedPoint(matrix, point) {
        // Додайте третю координату (однорідні координати)
        const homogeneousPoint = [point.x, point.y, 1];

        // Обернена матриця
        const inverseMatrix = numeric.inv(matrix); // numeric - це бібліотека для операцій з матрицями (потрібно встановити через npm)

        // Помножте вектор на обернену матрицю
        const transformedPoint = numeric.dot(inverseMatrix, homogeneousPoint);

        // Поверніть координати точки
        return { x: transformedPoint[0], y: transformedPoint[1] };
    }

    // Функція для множення матриць
    function multiplyMatrices(...matrices) {
        return matrices.reduce(
            (result, matrix) =>
                result.map((row, i) =>
                    row.map(
                        (_, j) => matrix[i][0] * result[0][j] + matrix[i][1] * result[1][j] + matrix[i][2] * result[2][j]
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
        if (0 === value || '' === value || !value) return;
    };

    const handleTransformOnClick = () => {
        // Point for rotation
        const x0 = points.x[rotationPoint];
        const y0 = points.y[rotationPoint];

        let transformedPoint;

        for (let i = 0; i < points.x.length && i < points.y.length; ++i) {
            transformedPoint = getTransformedPoint(getTransformationMatrix(x0, y0, scale, rotateDegree), { x: points.x[i], y: points.y[i] },);
            points.x[i] = transformedPoint.x;
            points.y[i] = transformedPoint.y;
        }

        const updatedPoints = {
            x: [...points.x],
            y: [...points.y],
            name: [...points.name]
        };

        setPoints(updatedPoints);
    }

    const handleRotatePointChange = (val) => {
        setRotationPoint(val);
    };

    return (
        <div style={{ marginTop: 100 }}>
            <Plot
                data={[
                    {
                        type: 'scatter',
                        mode: 'lines+markers',
                        x: points.x,
                        y: points.y,
                        marker: { color: 'blue' },
                        text: points.name,
                        hoverinfo: 'x+y+text',
                    },
                ]}
                layout={{
                    //title: 'Моя трапеція',
                    xaxis: { title: 'Вісь X' },
                    yaxis: { title: 'Вісь Y' },
                }}
            />

            <div>
                <div>
                    <label>{`Point 1 `}</label>
                    <input
                        type="number"
                        value={points.x[0]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(0, 'x', newVal);
                            handlePointChange(4, 'x', newVal);
                        }}
                        style={{ width: '50px', marginRight: '10px' }}
                    />
                    <input
                        type="number"
                        value={points.y[0]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(0, 'y', newVal);
                            handlePointChange(4, 'y', newVal);
                        }}
                        style={{ width: '50px' }}
                    />
                </div>

                <div>
                    <label>{`Point 2 `}</label>
                    <input
                        type="number"
                        value={points.x[1]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(1, 'x', newVal);
                        }}
                        style={{ width: '50px', marginRight: '10px' }}
                    />
                    <input
                        type="number"
                        value={points.y[1]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(1, 'y', newVal);
                        }}
                        style={{ width: '50px' }}
                    />
                </div>

                <div>
                    <label>{`Point 3 `}</label>
                    <input
                        type="number"
                        value={points.x[2]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(2, 'x', newVal);
                        }}
                        style={{ width: '50px', marginRight: '10px' }}
                    />
                    <input
                        type="number"
                        value={points.y[2]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(2, 'y', newVal);
                        }}
                        style={{ width: '50px' }}
                    />
                </div>

                <div>
                    <label>{`Point 4 `}</label>
                    <input
                        type="number"
                        value={points.x[3]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(3, 'x', newVal);
                        }}
                        style={{ width: '50px', marginRight: '10px' }}
                    />
                    <input
                        type="number"
                        value={points.y[3]}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value, 10) || 0;
                            handlePointChange(3, 'y', newVal);
                        }}
                        style={{ width: '50px' }}
                    />
                </div>

                <div>
                    <label>{`Scale`}</label>
                    <input
                        type="number"
                        value={scale}
                        min={0.000000000001}
                        max={100}
                        step={0.1}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value);
                            handleScaleChange(newVal);
                        }}
                        style={{ width: '50px', marginRight: '10px' }}
                    />
                </div>

                <div>
                    <label>{`Rotate Degree`}</label>
                    <input
                        type="number"
                        value={rotateDegree}
                        min={0}
                        max={720}
                        step={1}
                        onChange={(e) => {
                            const newVal = parseFloat(e.target.value);
                            handleRotateDegreeChange(newVal);
                        }}
                        style={{ width: '50px', marginRight: '10px' }}
                    />
                </div>

                <div>
                    <button onClick={handleTransformOnClick}>Transform</button>
                    <select text="Rotation Point"
                        onChange={(e) => { handleRotatePointChange(e.target.value) }}
                    >
                        {points.name.map((name, index) => (
                            <option key={index} value={index}>{name}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    );
};

export default MovingTrapezoid;
