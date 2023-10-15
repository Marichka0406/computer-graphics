import React, { Component } from 'react';

class KochSnowflake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iterations: props.iterations,// || 0,
      color: props.color,// || '#f00000',
      size: props.size || 1100, // Adjust this to set the size of the fractal
    };
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const { iterations, color, size } = this.state;

    // Define the starting points of the equilateral triangle
    const p1 = { x: size * 0.3 - size * 0.3, y: 150 };
    const p2 = { x: size * 0.7 - size * 0.3, y: 150 };
    const p3 = {
      x: (p1.x + p2.x) / 2 + (p1.y - p2.y) * (Math.sqrt(3) / 2),
      y: (p1.y + p2.y) / 2 + (p2.x - p1.x) * (Math.sqrt(3) / 2),
    };

    // Call the function to draw the Koch Snowflake
    this.drawKochSnowflake(ctx, p1, p2, p3, iterations, size, color);
  }

  drawKochSnowflake(ctx, p1, p2, p3, iterations, size, color) {
    this.drawKochFractal(ctx, p1, p2, iterations, size, color);
    this.drawKochFractal(ctx, p2, p3, iterations, size, color);
    this.drawKochFractal(ctx, p3, p1, iterations, size, color);
  }

  drawKochFractal(ctx, p1, p2, iterations, size, color) {
    if (iterations === 0) {
      // Draw a line segment
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = color;
      ctx.stroke();
    } else {
      // Calculate new points
      const p3 = {
        x: p1.x + (p2.x - p1.x) / 3,
        y: p1.y + (p2.y - p1.y) / 3,
      };
      const p4 = {
        x: p1.x + (p2.x - p1.x) / 2 + (p2.y - p1.y) * (Math.sqrt(3) / 6),
        y: p1.y + (p2.y - p1.y) / 2 - (p2.x - p1.x) * (Math.sqrt(3) / 6),
      };
      const p5 = {
        x: p1.x + (p2.x - p1.x) * 2 / 3,
        y: p1.y + (p2.y - p1.y) * 2 / 3,
      };

      // Recursively draw smaller segments
      this.drawKochFractal(ctx, p1, p3, iterations - 1, size, color);
      this.drawKochFractal(ctx, p3, p4, iterations - 1, size, color);
      this.drawKochFractal(ctx, p4, p5, iterations - 1, size, color);
      this.drawKochFractal(ctx, p5, p2, iterations - 1, size, color);
    }
  }

  render() {
    return <canvas ref="canvas" width={700} height={700}></canvas>;
  }
}

export default KochSnowflake;
 