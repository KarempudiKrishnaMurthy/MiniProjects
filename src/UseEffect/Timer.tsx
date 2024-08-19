// import React from 'react'
// import { useState,useEffect } from 'react'

// const Timer = () => {

//     const [seconds,setsecounds]=useState(0);

//     useEffect(() =>{
//         const interValId =setInterval(()=>{
//             setsecounds(prevSecound => prevSecound + 1);
//         },1000);

//         return ()=> clearInterval(interValId);

//     } ,[] );
//   return <p>Time elapsed: {seconds} seconds</p>;
// }

// export default Timer

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Effect is running');
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        console.log('Updating seconds:', prevSeconds + 1);
        return prevSeconds + 1;
      });
    }, 1000);

    // Cleanup function
    return () => {
      console.log('Cleaning up interval');
      clearInterval(intervalId);
    };
  }, []); // Run only once

  console.log('Rendering with seconds:', seconds);

  return <p>Time elapsed: {seconds} seconds</p>;
}

export default Timer;
