import React, { useState, useMemo } from "react";

function calculateFactorial(n) {
  console.log("Caluculating Factorial........");
  if (n <= 0) return 1;
  return n * calculateFactorial(n - 1);
}

export default function FactorialCaluculator() {
  const [number, setnumber] = useState(2);

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h1>Use Memo Factoral Calculator</h1>
      <p>Number :{number}</p>
      <p>Factorial :{factorial}</p>
      <button onClick={() => setnumber((prevNumber) => prevNumber + 1)}>
        Increment Number
      </button>
    </div>
  );
}
