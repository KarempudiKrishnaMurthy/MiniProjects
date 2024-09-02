import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar.jsx"; // Import the NavBar component
import Datafetch from "./UseEffect/Datafetch.tsx";
import PageTitle from "./UseEffect/Pagetitle.tsx";
import Timer from "./UseEffect/Timer.tsx";
import Counter from "./UseState/Counter.tsx";
import ThemeContext from "./UseContext/Create_context.jsx";
import ThemeComponent from "./UseContext/ThemeComponent.tsx";
import ThemeSwitcher from "./UseContext/ThemeSwitcher.tsx";
import ReducerCounter from "./UseReducer/UseReducerCompoent.jsx";
import HighlightInput from "./UseRef/HighlightInput.jsx";
import FactorialCaluculator from "./UseMemo/UseMemo.jsx";
import ToDoList from "./MiniProjects/ToDoList/ToDoList.jsx"; // Import your To-Do List component

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route
              path="/practice"
              element={<PracticeComponents theme={theme} toggleTheme={toggleTheme} />}
            />
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
        onClick={() => window.location.href = '/practice'}
        className="button bg-blue-500 hover:bg-blue-600 ml-4"
      >
        Go to Practice Components
      </button>
    </div>
  );
}

function PracticeComponents({ theme, toggleTheme }) {
  return (
    <div className="grid">
      <div className="col-4">
        <div className="practice-section">
          <h1>UseState</h1>
          <Counter />
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>UseEffect Loading</h1>
          <Datafetch />
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>UseEffect Pagetitle Change</h1>
          <PageTitle />
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>UseEffect Timer</h1>
          <Timer />
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>Use Context</h1>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeSwitcher />
            <ThemeComponent />
          </ThemeContext.Provider>
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>Use Reducer</h1>
          <ReducerCounter />
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>Use Ref</h1>
          <HighlightInput />
        </div>
      </div>
      <div className="col-4">
        <div className="practice-section">
          <h1>Use Memo</h1>
          <FactorialCaluculator />
        </div>
      </div>
    </div>
  );
}

export default App;
