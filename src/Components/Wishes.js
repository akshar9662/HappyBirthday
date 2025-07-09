import React from 'react';

const wishes = [
  "Happy Birthday Shivani! May your day be filled with love and laughter. 🎂",
  "Wishing you all the best on your special day! 🌟",
  "You deserve all the happiness in the world. Have a blast! 💖",
];

export default function Wishes() {
  return (
    <div className="container my-6">
      <h2 className="text-center mb-4">💌 Best Wishes</h2>
      <div className="d-flex flex-column gap-4">
        {wishes.map((msg, idx) => (
          <div
            key={idx}
            className="p-4 rounded shadow-sm"
            style={{
              background: 'linear-gradient(to right, #fceabb, #f8b500)',
              color: '#333',
              fontWeight: '500',
              fontSize: '18px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderLeft: '8px solid #ff6f00',
            }}
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
