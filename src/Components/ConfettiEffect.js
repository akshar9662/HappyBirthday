import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Fireworks() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const duration = 2000; // 30 seconds
    const end = Date.now() + duration;

    const frame = () => {
      const spread = isMobile ? 55 : 55; // 🎯 Only spread changes
 const particleCount = isMobile ? 3 : 3;
      confetti({
        particleCount,
        angle: 60,
        spread: spread,
        origin: { x: 0 },
      });

      confetti({
        particleCount,
        angle: 120,
        spread: spread,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return null;
}
