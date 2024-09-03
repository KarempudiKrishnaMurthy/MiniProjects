import React from "react";
import Button from "./Button";

export default function ButtonPanel({ handleButtonClick }) {
  const buttons = [
    "7", "8", "9", "/", "4", "5", "6", "*",
    "1", "2", "3", "-", "0", ".", "=", "+", "C"
  ];

  return (
    <div className="button-panel">
      {buttons.map((buttonName) => (
        <Button
          key={buttonName}
          name={buttonName}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
}
