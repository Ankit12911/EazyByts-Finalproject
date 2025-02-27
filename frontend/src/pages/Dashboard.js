import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem("bookings")) || []);

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="dashboard">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? <p>No bookings yet.</p> : bookings.map((booking) => (
        <div key={booking.id} className="booking-card">
          <h2>{booking.title}</h2>
          <p>Date: {booking.date}</p>
          <p>Price: ₹{booking.price}</p>
          <button onClick={() => handleCancel(booking.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
