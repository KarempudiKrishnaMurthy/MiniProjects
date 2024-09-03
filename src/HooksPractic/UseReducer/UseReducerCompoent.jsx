import React,{useReducer} from "react";
import { reducer } from "./ReducerFunction";
import { initalState } from "./ReducerFunction";

export default function ReducerCounter(){
    const [state,dispatch] = useReducer(reducer,initalState);

    return(
        <div>
            <p> COunt : {state.count} </p>
            <button onClick={()=> dispatch({ type : "incerment"})}>+</button>
            <button onClick={()=> dispatch({ type : "decrement"})}>-</button>
            <button onClick={()=> dispatch({ type : "reset"})}>reset</button>
        </div>
    );
    
}
