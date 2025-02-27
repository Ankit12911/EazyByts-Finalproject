import React, { useState } from "react";
import "./Admin.css"; // 🎨 Optional CSS file for styling

const Admin = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Music Concert", date: "2025-06-15", price: 500 },
    { id: 2, title: "Tech Conference", date: "2025-07-10", price: 1000 },
  ]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", price: "" });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.price) {
      alert("Please fill all fields!");
      return;
    }
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({ title: "", date: "", price: "" });
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
      <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
      <input type="number" placeholder="Price" value={newEvent.price} onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })} />
      <button onClick={handleAddEvent}>Add Event</button>

      <h2>Manage Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.date} | ₹{event.price}</p>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
