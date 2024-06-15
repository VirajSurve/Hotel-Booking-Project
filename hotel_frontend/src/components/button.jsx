import React, { useState } from "react";

function Button() {
  const [color, setColor] = useState("white");
  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "white" ? "red" : "white"));
  };

  return (
    <button
      id="btnh"
      className="btn"
      style={{ color: color }}
      onClick={toggleColor}
    >
      <i className={color === "white" ? "bi bi-heart" : "bi bi-heart-fill"}></i>
    </button>
  );
}

export default Button;
