import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));

    if (storedEvents) {
      setEvents(storedEvents);
    } else {
      // ✅ Move default events inside useEffect to avoid warning
      const defaultEvents = [
        { id: 1, title: "Music Concert", date: "2025-06-15", price: 500, category: "Music", image: "/images/music concert.png" },
        { id: 2, title: "Tech Conference", date: "2025-07-10", price: 1000, category: "Technology", image: "/images/tech.jpeg" },
        { id: 3, title: "Art Exhibition", date: "2025-08-20", price: 300, category: "Art", image: "/images/art.jpeg" },
      ];

      setEvents(defaultEvents);
      localStorage.setItem("events", JSON.stringify(defaultEvents));
    }
  }, []); // ✅ Empty dependency array is fine now

  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <button onClick={() => navigate("/admin")}>Go to Admin Page</button>

      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Price: ₹{event.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
