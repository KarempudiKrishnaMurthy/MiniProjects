import './App.css';
import Datafetch from './UseEffect/Datafetch.tsx';
import PageTitle from './UseEffect/Pagetitle.tsx';
import Timer from './UseEffect/Timer.tsx';
import Counter from './UseState/Counter.tsx';
import React,{useState} from 'react';
import ThemeContext from './Context/Create_context.jsx';
import ThemeComponent from './Context/ThemeComponent.tsx';
import ThemeSwitcher from './Context/ThemeSwitcher.tsx';

function App() {
  const [theme,settheme] =useState('light');

  const toggleTheme = () =>{
    settheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (  
    <div className="App">

      <div>
      <h1>UseState</h1>
      <Counter/>
      </div>
      
      <div>
      <h1>UseEffect loding</h1>
      <Datafetch/>
      <h1>UseEffect Pagetitle change</h1>
      <PageTitle/>
      <h1>UseEffect Timmer</h1>
      <Timer/>
      </div>
      
      <div>
      <h1>Use Context</h1>
      <ThemeContext.Provider value={ {theme , toggleTheme}}> 
        <ThemeSwitcher/>
        <ThemeComponent/>
      </ThemeContext.Provider>
      </div>

    </div>
  );
}

export default App;
