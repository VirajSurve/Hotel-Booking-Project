import React, { useState } from "react";

function Button() {
  const [color, setColor] = useState("white");
  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "white" ? "red" : "white"));
  };

  return (
    <div className="heart">
      <button
        id="btnh"
        className="btn"
        style={{ color: color }}
        onClick={toggleColor}
      >
        <i className="bi bi-heart-fill"></i>
      </button>
    </div>
  );
}

export default Button;