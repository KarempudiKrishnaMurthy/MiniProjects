import  React,{useContext} from 'react';
import ThemeContext from './Create_context';

function ThemeSwitcher(){
    const {theme,toggleTheme} =useContext(ThemeContext);
    
    return(
        <div>
            <p>Current Theme : {theme} </p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeSwitcher