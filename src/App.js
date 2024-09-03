import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar.jsx"; // Import the NavBar component
import ToDoList from "./MiniProjects/ToDoList/ToDoList.jsx"; // Import your To-Do List component
import Calculator from "./MiniProjects/Calculator/Calculator.jsx";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/calculator" element={<Calculator/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Welcome to the To-Do List project. Choose a section to explore:</p>
      <button
        onClick={() => window.location.href = '/todo'}
        className="button bg-blue-500 hover:bg-blue-600"
      >
        Go to To-Do List
      </button>
      <button
        onClick={() => window.location.href = '/calculator'}
        className="button bg-blue-500 hover:bg-blue-600 ml-4"
      >
        Go to Calculator Components
      </button>
    </div>
  );
}
export default App;
