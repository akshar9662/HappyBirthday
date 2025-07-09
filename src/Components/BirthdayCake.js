import React, { useState } from "react";
import "./BirthdayCake.css";

export default function BirthdayCake() {
  const [blownOut, setBlownOut] = useState(false);
  const [blowing, setBlowing] = useState(false);

  const handleBlow = () => {
    if (blowing || blownOut) return;

    setBlowing(true);
    const audio = new Audio("/images/Blowing out the candle.mp3"); // 🔊 Your sound file
    audio.play();

    // Blow lasts ~4.5 sec (adjust based on your audio length)
    setTimeout(() => {
      setBlownOut(true);
      setBlowing(false);
    }, 1500);
  };

  return (
    <div className="container my-4 text-center">
      <h2 className="mb-4">🎂 Blow the Candles!</h2>
      <br />
      <div className="cake-wrapper" onClick={handleBlow}>
        <div className="cake">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="candle wax-color">
              {!blownOut && <div className="flame"></div>}
            </div>
          ))}
        </div>
        <p className="text-muted mt-3">
          {blownOut ? "Candles are blown out! 🎉" : "(Click the cake to blow hard!)"}
        </p>
      </div>
    </div>
  );
}
