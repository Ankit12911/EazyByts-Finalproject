import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem("bookings")) || []);

  const events = JSON.parse(localStorage.getItem("events")) || [];
  const event = events.find((e) => e.id === Number(id));

  if (!event) return <h2>Event Not Found</h2>;

  const handleBooking = () => {
    const newBooking = { id: Date.now(), eventId: event.id, title: event.title, date: event.date, price: event.price };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    navigate("/dashboard"); // ✅ Redirect to User Dashboard
  };

  return (
    <div className="booking">
      <h1>Confirm Booking for {event.title}</h1>
      <p>Price: ₹{event.price}</p>
      <button onClick={handleBooking}>Confirm & Pay</button>
    </div>
  );
};

export default Booking;
