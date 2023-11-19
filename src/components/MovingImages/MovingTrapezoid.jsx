import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const MovingTrapezoid = () => {
    // Визначення координат трапеції
    const [points, setPoints] = useState({
        x: [1, 2, 4, 3, 1],
        y: [1, 3, 4, 2, 1],
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

    const rotatePoint = (x, y, x0, y0, rotateDegree) => {
        let radian = rotateDegree * Math.PI / 180.0;
        let cos = Math.round(Math.cos(radian) * 1000) / 1000;
        let sin = Math.round(Math.sin(radian) * 1000) / 1000;

        let newX = (x - x0) * cos - (y - y0) * sin + x0;
        let newY = (x - x0) * sin + (y - y0) * cos + y0;

        return { x: newX, y: newY };
    };

    const handleRotateDegreeChange = (value) => {
        setRotateDegree(value);
    };

    const handleScaleChange = (value) => {
        setScale(value);
        if (0 === value || '' === value || !value) return;
    };

    const handleTransformOnClick = () => {
        // Scale
        for (let i = 0; i < points.x.length; ++i) {
            points.x[i] = points.x[i] * scale;
        }

        for (let i = 0; i < points.y.length; ++i) {
            points.y[i] = points.y[i] * scale;
        }

        const scaledPoints = {
            x: [...points.x],
            y: [...points.y],
            name: [...points.name]
        };

        setPoints(scaledPoints);

        // Point for rotation
        const x0 = points.x[rotationPoint];
        const y0 = points.y[rotationPoint];

        // Rotate
        let newPoints = [
            { x: points.x[0], y: points.y[0] },
            { x: points.x[1], y: points.y[1] },
            { x: points.x[2], y: points.y[2] },
            { x: points.x[3], y: points.y[3] },
            { x: points.x[4], y: points.y[4] },
        ];

        newPoints.forEach(point => {
            let newPoint = rotatePoint(point.x, point.y, x0, y0, rotateDegree);
            point.x = newPoint.x;
            point.y = newPoint.y;
        });

        for (let i = 0; i < points.x.length; ++i) {
            points.x[i] = newPoints[i].x;
        }

        for (let i = 0; i < points.y.length; ++i) {
            points.y[i] = newPoints[i].y;
        }

        const updatedPoints = {
            x: [...points.x],
            y: [...points.y],
            name: [...points.name]
        };

        setPoints(updatedPoints);
    };

    const handleRotatePointChange = (val) => {
        setRotationPoint(val);
    };

    return (
        <div>
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
