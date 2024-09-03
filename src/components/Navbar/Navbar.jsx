import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/todo"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        To-Do List
      </Link>
      <Link
        to="/calculator"
        style={{
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Calculator
      </Link>
    </nav>
  );
};

export default NavBar;
