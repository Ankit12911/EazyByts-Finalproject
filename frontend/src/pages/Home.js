import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Event Management System 🎉</h1>
      <p>Book and manage events easily.</p>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
