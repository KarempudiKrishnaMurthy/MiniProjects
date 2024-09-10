
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaList, FaCalculator, FaMoneyBillWave } from 'react-icons/fa'; // Import the required icons

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
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
          display: "flex",
          alignItems: "center",
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        <FaHome style={{ marginRight: "8px" }} /> Home
      </Link>
      <Link
        to="/todo"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        <FaList style={{ marginRight: "8px" }} /> To-Do List
      </Link>
      <Link
        to="/calculator"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        <FaCalculator style={{ marginRight: "8px" }} /> Calculator
      </Link>
      <Link
        to="/budget-tracker"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 15px",
          textDecoration: "none",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        <FaMoneyBillWave style={{ marginRight: "8px" }} /> Budget Tracker
      </Link>
    </nav>
  );
};

export default NavBar;
