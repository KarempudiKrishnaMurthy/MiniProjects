import React, { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setInput("");
      setResult(null);
      return;
    }

    if (buttonName === "=") {
      try {
        setResult(eval(input)); // Use eval with caution
      } catch {
        setResult("Error");
      }
      return;
    }

    setInput(input + buttonName);
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonPanel handleButtonClick={handleButtonClick} />
    </div>
  );
}
