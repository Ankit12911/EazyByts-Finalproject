import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Get Events from Local Storage
  const events = JSON.parse(localStorage.getItem("events")) || [];
  const event = events.find((e) => e.id === Number(id));

  if (!event) return <h2>Event Not Found</h2>;

  return (
    <div className="event-details">
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Price: ₹{event.price}</p>
      <p>Description: This is a great event about {event.title}.</p>

      <button onClick={() => navigate(`/booking/${event.id}`)}>Book Now</button>
    </div>
  );
};

export default EventDetails;
