import React, { Component } from 'react';

class MandelbrotSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 600,
      exponent: props.exponent || 2, // Exponent
      maxIterations: props.iterations || 0, // Maximum number of iterations
      color: props.color || "rgb(255, 255, 255)",
    };
  }

    componentDidMount() {
    this.drawMandelbrot();
  }

  componentDidUpdate(prevProps) {
    if (
        prevProps.iterations !== this.props.iterations ||
        prevProps.color !== this.props.color ||
        prevProps.exponent !== this.props.exponent
    ) {
        console.log(prevProps);
        console.log(this.props);

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const width = this.state.width;
        const height = this.state.height;
        const iterations = this.props.iterations;
        const color = this.props.color;
        const exponent = this.props.exponent;

        this.setState({width, height, exponent, iterations, color});

        this.drawMandelbrot();
        this.render();
    }
}

  drawMandelbrot() {
    const width = this.state.width;
    const height = this.state.height;
    const exponent = this.props.exponent;
    const maxIterations = this.props.iterations;
    const mainColor = this.props.color;

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const zx = (x - width / 2) * 4 / width;
        const zy = (y - height / 2) * 4 / height;

        let cRe = zx;
        let cIm = zy;

        let i = 0;
        for (; i < maxIterations; i++) {
          const re2 = cRe * cRe;
          const im2 = cIm * cIm;
          if (re2 + im2 > 4) break; // Escape condition

          const newRe = Math.pow(re2 + im2, exponent / 2) * Math.cos(exponent * Math.atan2(cIm, cRe)) + zx;
          const newIm = Math.pow(re2 + im2, exponent / 2) * Math.sin(exponent * Math.atan2(cIm, cRe)) + zy;
          cRe = newRe;
          cIm = newIm;
        }

        // Color the pixel based on the number of iterations
        const color = this.getGradientColor(i, maxIterations, mainColor);
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

getGradientColor(iterations, maxIterations, baseColor) {
    // Customizable gradient coloring based on the number of iterations and the base color
    let hue = (iterations / maxIterations) * 360;

    if(0 === maxIterations) {
       return `rgb(${0},${0},${0})`
    }

    const match = baseColor.match(/rgb\((\d+), (\d+), (\d+)\)/);

      const r = parseInt(match[1], 10);
      const g = parseInt(match[2], 10);
      const b = parseInt(match[3], 10);

    const rgbColor = this.hslToRgb(hue / 360, 1, 0.5);
    const red = Math.floor(r * (1 - iterations / maxIterations) + rgbColor.r * iterations / maxIterations);
    const green = Math.floor(g * (1 - iterations / maxIterations) + rgbColor.g * iterations / maxIterations);
    const blue = Math.floor(b * (1 - iterations / maxIterations) + rgbColor.b * iterations / maxIterations);
    return `rgb(${red},${green},${blue})`;
  }

  hexToRgb(hex) {
    // Convert a hex color code to RGB
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r, g, b };
  }

  render() {
    return <canvas id="canva" ref="canvas" width={this.state.width} height={this.state.height}></canvas>;
  }
}

export default MandelbrotSet;
