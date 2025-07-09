import React, { useState } from "react";
import "./LeaveWish.css";

export default function LeaveWish() {
  const [wishes, setWishes] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setWishes([{ ...form }, ...wishes]);
    setForm({ name: "", message: "" });
  };

  return (
    <div className="container my-6">
      <h2 className="text-center mb-4">💌 Leave a Birthday Wish</h2>

      <form className="wish-form mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Birthday Wish"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Wish</button>
      </form>

      <div className="wish-list">
        {wishes.map((wish, idx) => (
          <div key={idx} className="wish-card">
            <strong>{wish.name}</strong>
            <p>{wish.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
