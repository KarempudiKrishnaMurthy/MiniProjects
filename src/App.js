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
import HighlightInput from "./UseRef/HighlightInput.jsx";
import "primereact/resources/themes/saga-blue/theme.css"; /* or another theme */
import "primereact/resources/primereact.min.css"; /* PrimeReact core CSS */
import "primeicons/primeicons.css"; /* PrimeIcons CSS */
import "primeflex/primeflex.css";
import FactorialCaluculator from "./UseMemo/UseMemo.jsx";

function App() {
  const [theme, settheme] = useState("light");

  const toggleTheme = () => {
    settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="grid">
      <div className="col-4 ">
        <h1>UseState</h1>
        <Counter />
      </div>
        <div className="col-4">
          <h1>UseEffect loding</h1>
          <Datafetch />
        </div>
        <div className="col-4">
          <h1>UseEffect Pagetitle change</h1>
          <PageTitle />
        </div>
        <div className="col-4">
          <h1>UseEffect Timmer</h1>
          <Timer />
        </div>
      <div className="col-4">
        <h1>Use Context</h1>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ThemeSwitcher />
          <ThemeComponent />
        </ThemeContext.Provider>
      </div>

      <div className="col-4">
        <h1>Use Reducer</h1>
        <ReducerCounter />
      </div>

      <div className="col-4">
        <h1>Use Ref</h1>
        <HighlightInput />
      </div>

      <div className="col-4">
        <FactorialCaluculator/>
      </div>
    </div>
  );
}

export default App;
