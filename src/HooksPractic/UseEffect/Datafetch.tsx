import React from 'react'
import { useState,useEffect } from 'react'

const Datafetch = () => {
    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // Empty list means run only once
  
      if (!data) return <p>Loading...</p>;
      return <div>{JSON.stringify(data)}</div>;   
}

export default Datafetch;
