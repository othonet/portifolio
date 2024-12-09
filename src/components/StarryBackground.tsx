import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    const starCount = 100; // Quantidade de "estrelas"

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff'; // Cor das estrelas
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default StarryBackground;
