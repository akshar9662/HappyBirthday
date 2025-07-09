import React from 'react';

const heroStyle = {
  backgroundImage:
    "linear-gradient(to right top, rgba(255,0,150,0.6), rgba(0,204,255,0.6)), url('/images/IMG20231128091951.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'top center', // 👈 focuses on top
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',               // 👈 taller for full background
  padding: '50px 20px',
  color: 'white',
};


export default function HeroSection() {
  return (
    <div style={heroStyle} className="d-flex align-items-center justify-content-center text-white">
      <div className="container text-center text-md-start d-md-flex align-items-center gap-5">
        <div className="mb-4 mb-md-0">
          <h1 className="display-4 fw-bold">🎉 Happy Birthday Shivani 🎂</h1>
          <p className="lead">Wishing you a day filled with love,enjoy, and unforgettable memories!</p>
        </div>
        <img
          src="/images/gift-box.jpg"
          alt="Birthday Person"
          className="rounded-circle shadow"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            border: '5px solid white',
          }}
        />
      </div>
    </div>
  );
}
