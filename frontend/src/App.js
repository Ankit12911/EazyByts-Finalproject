import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails"; // ✅ Event Details Page
import Booking from "./pages/Booking"; // ✅ Booking Page
import Dashboard from "./pages/Dashboard"; // ✅ User Dashboard
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin"; // ✅ Admin Page
import Navbar from "./components/Navbar"; // ✅ Navbar Component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetails />} /> {/* ✅ Event Details Page */}
        <Route path="/booking/:id" element={<Booking />} /> {/* ✅ Booking Page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ User Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} /> {/* ✅ Admin Page */}
      </Routes>
    </Router>
  );
};

export default App;
