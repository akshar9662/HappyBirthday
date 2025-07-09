import React, { useState } from "react";
import "./LeaveWish.css";
import emailjs from "@emailjs/browser";

export default function LeaveWish() {
  const [wishes, setWishes] = useState([]);
  const [form, setForm] = useState({ from_name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.from_name.trim() || !form.message.trim()) return;

  emailjs.send("service_x17fe38","template_uwj355h",{
from_name: form.from_name,
message: form.message,
email: "akshargohel18@gmail.com",
},'7YRamT3LVpMBXWpQV').then(() => {
        alert("Wish sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setWishes([{ ...form }, ...wishes]);
    setForm({ from_name: "", message: "" });
  };

  return (
    <div className="container my-6">
      <h2 className="text-center mb-4">💌 Leave a Birthday Wish</h2>

      <form className="wish-form mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={form.from_name}
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
            <strong>{wish.from_name}</strong>
            <p>{wish.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
