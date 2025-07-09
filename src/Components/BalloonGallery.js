import React from "react";
import "./BalloonGallery.css";

const images = [
      "images/IMG20231114112158.jpg",
   "/images/IMG20230623165640.jpg",
  "/images/IMG-20231019-WA0024.jpg",
  "/images/IMG20231127103123.jpg",
  "/images/IMG20231128085012.jpg",
  "/images/IMG20231128091951.jpg",
"images/IMG20231114112157.jpg",
  "/images/IMG_3366.jpg",
  "/images/IMG20230623165617.jpg",
  "/images/IMG-20220311-WA0031.jpg",
        "/images/IMG_20230521_072806.jpg",
  "/images/IMG_20230521_073616.jpg",
  "/images/1687521570752.jpg",
  "/images/IMG_3362.jpg",
  "images/IMG20231114111908.jpg"
];

export default function ZoomGridGallery() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📷 Old Memories😁</h2>
      <div className="zoom-gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="zoom-card">
            <img src={src} alt={`memory-${idx}`} />
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
}
