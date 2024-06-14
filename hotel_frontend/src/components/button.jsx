import React, { useState } from "react";

function Button() {
  const [color, setColor] = useState("white");
  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "white" : "red"));
  };
  return (
    <div className="heart">
      <button
        id="btnh"
        class="btn"
        style={{ color: color }}
        onclick={toggleColor}
      >
        <i class="bi bi-heart-fill"></i>
      </button>
    </div>
  );
}

export default Button;
