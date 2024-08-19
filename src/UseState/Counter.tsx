import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [count,setcount]=useState(0);
  return (
    <div>
    <p>the count is {count}</p>
    <button onClick={()=>setcount(count+1)}>Click Me</button>
    </div>
  )
}

export default Counter
