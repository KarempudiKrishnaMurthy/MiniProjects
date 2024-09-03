import React,{useState,useRef} from "react";

export default function HighlightInput() {
    const inputRef=useRef(null);
    const clickCountRef=useRef(0);
    const [renderCount,setRenderCount]=useState(0);


    const handelClick= () =>{
        clickCountRef.current +=1;
        inputRef.current.focus();
        inputRef.current.style.backgroundColor ='yellow';

        setRenderCount(prevCount => prevCount +1);

    };

  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Click the button to hightlight me"/>
        <button onClick={handelClick}>Click Me</button>
        <p>Button Clicked {clickCountRef.current}</p>
        <p>Component Rerendered {renderCount} times</p>        
    </div>
  );
}
