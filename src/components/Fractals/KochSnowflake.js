import React, { Component } from 'react';

class KochSnowflake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MAX_NUMBER_OF_ITERATIONS: 7,// Максимальна кількість ітерацій
      iterations: props.iterations || 0, // Кількість ітерацій
      color: props.color || '#000000',// Колір ліній
      size: props.size || 1100,  // Розмір полотна
      selectedKochFractal: props.selectedKochFractal,// Вид фрактала Коха
    };
  }

  componentDidMount() {
     // Отримання контексту для малювання на canvas
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0,0,255)"
    const { iterations, color, size } = this.state;

     // Визначення точок для створення початкового рівностороннього трикутника
    const p1 = { x: size * 0.3 - size * 0.3, y: 150 };
    const p2 = { x: size * 0.7 - size * 0.3, y: 150 };
    const p3 = {
      x: (p1.x + p2.x) / 2 + (p1.y - p2.y) * (Math.sqrt(3) / 2),
      y: (p1.y + p2.y) / 2 + (p2.x - p1.x) * (Math.sqrt(3) / 2),
    };


     // Фон канвасу
    ctx.globalCompositeOperation = 'destination-under'
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

   // Виклик функції для малювання сніжинки Коха
    this.drawKochSnowflake(ctx, p1, p2, p3, iterations, size, color);
  }

  // Функція для малювання трикутника
  drawTriangle(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0,0,255)"
    const { iterations, color, size } = this.state;

     // Визначення точок для рівностороннього трикутника
    const p1 = { x: size * 0.3 - size * 0.3, y: 150 };
    const p2 = { x: size * 0.7 - size * 0.3, y: 150 };
    const p3 = {
      x: (p1.x + p2.x) / 2 + (p1.y - p2.y) * (Math.sqrt(3) / 2),
      y: (p1.y + p2.y) / 2 + (p2.x - p1.x) * (Math.sqrt(3) / 2),
    };

     // Фон канвасу
    ctx.globalCompositeOperation = 'destination-under'
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Виклик функції для малювання сніжинки Коха
    this.drawKochSnowflake(ctx, p1, p2, p3, iterations, size, color);
  }

   // Функція для малювання сніжинки Коха
  drawKochSnowflake(ctx, p1, p2, p3, iterations, size, color, selectedKochFractal) {
    if('' === iterations) return;
    if(0 > iterations || this.state.MAX_NUMBER_OF_ITERATIONS < iterations) return;

    this.drawKochFractal(ctx, p1, p2, iterations, size, color, selectedKochFractal);
    this.drawKochFractal(ctx, p2, p3, iterations, size, color, selectedKochFractal);
    this.drawKochFractal(ctx, p3, p1, iterations, size, color, selectedKochFractal);
  }

  drawKochFractal(ctx, p1, p2, iterations, size, color, selectedKochFractal) {
    if (iterations === 0 || iterations === "0") {
       // Малювання лінії
      ctx.beginPath();// Починаємо новий шлях для малювання
      ctx.moveTo(p1.x, p1.y); // Встановлюємо початкову точку лінії
      ctx.lineTo(p2.x, p2.y);// Малюємо лінію до певної точки
      ctx.strokeStyle = color;// Встановлюємо колір лінії зі змінної color
      ctx.stroke(); // Виконуємо малювання лінії
      ctx.fillStyle = "rgb(0,0,255)"// Встановлюємо колір заливки
    } else {

      let rand1 = 1;
      let rand2 = 1;

      let inverted = 1;

      // Перевірка типу вибраного фрактала.
      if (selectedKochFractal === "randomized") {
        // Якщо вибраний тип "randomized", генеруються випадкові значення для rand1 та rand2 в межах від 0.1 до 1.
        rand1 = Math.random() * (1 - 0.1) + 0.1; 
        rand2 = Math.random() * (1 - 0.1) + 0.1;
      } else if (selectedKochFractal === "inverted") {
         // Якщо вибраний тип "inverted", змінна inverted встановлюється на -1 для зміни орієнтації побудови точок фрактала.
        inverted = -1;
      }

       // Обчислення нових точок
      const p3 = {
        x: p1.x + rand1 * (p2.x - p1.x) / 3,
        y: p1.y + rand2 * (p2.y - p1.y) / 3,
      };
      const p4 = {
        x: p1.x + rand1 * (p2.x - p1.x) / 2 + inverted * (p2.y - p1.y) * (Math.sqrt(3) / 6),
        y: p1.y + rand2 * (p2.y - p1.y) / 2 - inverted * (p2.x - p1.x) * (Math.sqrt(3) / 6),
      };
      const p5 = {
        x: p1.x + rand1 * (p2.x - p1.x) * 2 / 3,
        y: p1.y + rand2 * (p2.y - p1.y) * 2 / 3,
      };

       // Рекурсивне малювання менших відрізків
      this.drawKochFractal(ctx, p1, p3, iterations - 1, size, color, selectedKochFractal);
      this.drawKochFractal(ctx, p3, p4, iterations - 1, size, color, selectedKochFractal);
      this.drawKochFractal(ctx, p4, p5, iterations - 1, size, color, selectedKochFractal);
      this.drawKochFractal(ctx, p5, p2, iterations - 1, size, color, selectedKochFractal);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.iterations !== this.props.iterations ||
      prevProps.color !== this.props.color ||
      prevProps.selectedKochFractal !== this.props.selectedKochFractal
      ) {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Фон канвасу
      ctx.globalCompositeOperation = 'destination-under'
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const size = this.state.size;
      const iterations = this.props.iterations;
      const color = this.props.color;
      const selectedKochFractal = this.props.selectedKochFractal;

      this.setState({ iterations, color, size, selectedKochFractal });

       // Визначення точок для рівностороннього трикутника
      const p1 = { x: size * 0.3 - size * 0.3, y: 150 };
      const p2 = { x: size * 0.7 - size * 0.3, y: 150 };
      const p3 = {
        x: (p1.x + p2.x) / 2 + (p1.y - p2.y) * (Math.sqrt(3) / 2),
        y: (p1.y + p2.y) / 2 + (p2.x - p1.x) * (Math.sqrt(3) / 2),
      };

       // Виклик функції для малювання сніжинки Коха
      this.drawKochSnowflake(ctx, p1, p2, p3, iterations, size, color, selectedKochFractal);

      this.render();
    }
  }

  render() {
    return <canvas id="canva" ref="canvas" width={700} height={700}></canvas>;
  }
}

export default KochSnowflake;
