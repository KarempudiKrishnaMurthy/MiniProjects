import "./App.css";
import Datafetch from "./UseEffect/Datafetch.tsx";
import PageTitle from "./UseEffect/Pagetitle.tsx";
import Timer from "./UseEffect/Timer.tsx";
import Counter from "./UseState/Counter.tsx";
import React, { useState } from "react";
import ThemeContext from "./UseContext/Create_context.jsx";
import ThemeComponent from "./UseContext/ThemeComponent.tsx";
import ThemeSwitcher from "./UseContext/ThemeSwitcher.tsx";
import ReducerCounter from "./UseReducer/UseReducerCompoent.jsx";
import { reducer } from "./UseReducer/ReducerFunction.jsx";
import { initalState } from "./UseReducer/ReducerFunction.jsx";

function App() {
  const [theme, settheme] = useState("light");

  const toggleTheme = () => {
    settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      
      <div>
        <h1>UseState</h1>
        <Counter />
      </div>

      <div>
        <h1>UseEffect loding</h1>
        <Datafetch />
        <h1>UseEffect Pagetitle change</h1>
        <PageTitle />
        <h1>UseEffect Timmer</h1>
        <Timer />
      </div>

      <div>
        <h1>Use Context</h1>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ThemeSwitcher />
          <ThemeComponent />
        </ThemeContext.Provider>
      </div>

      <div>
        <h1>Use Reducer</h1>
        <ReducerCounter />
      </div>

    </div>
  );
}

export default App;
