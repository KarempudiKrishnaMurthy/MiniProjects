import React,{useContext} from "react";
import ThemeContext from "./Create_context";


export default function ThemeComponent() {
    const{theme}=useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Themed compoent with {theme} theme </p>
    </div>
  )
}
