import React from "react";
import "./PolaroidGallery.css";

const photos = [
  
  "/images/Snapchat-819154275.jpg",
  "/images/Snapchat-326205691.jpg",
  "/images/Snapchat-89203463.jpg",
  "/images/IMG-20220621-WA0027.jpg",
  "/images/Snapchat-1059944447.jpg",
  "/images/Snapchat-869733037.jpg",
  "/images/Snapchat-1175874365.jpg",
  "/images/Snapchat-1702137949.jpg",
  "/images/Snapchat-1482360104.jpg",
"/images/IMG20230830125135.jpg",
      "/images/IMG20230830125512.jpg",
  "/images/Screenshot_2020-09-07-09-27-50-23.png",
  "/images/IMG20230830125103.jpg",
  "/images/IMG20231115154714.jpg",
];

export default function PolaroidGallery() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🖼️ Unforgettable Moments🥰</h2>
      <div className="polaroid-grid">
        {photos.map((src, idx) => (
          <div key={idx} className={`polaroid polaroid-${idx % 5}`}>
            <img src={src} alt={`memory-${idx}`}/>
            <div>🥰😍</div>
          </div>
        ))}
      </div>
    </div>
  );
}
