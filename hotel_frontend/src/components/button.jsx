import React, { useState } from "react";

function Button() {
  const [color, setColor] = useState("white");
  const toggleColor = () => {
    // setColor((prevColor) => (prevColor === "white" ? "red" : "white"));
    if(color === 'white'){
      setColor('red');
    }
    else{
      setColor('white');
    }
  //  { alert("hi")}
  };

  return (
    <button
      id="btnh"
      className="btn"
      onClick={toggleColor}
      style={{ color: `${color}` }}
     
    >
      <i className={color === "white" ? "bi bi-heart" : "bi bi-heart-fill"}></i>
     </button>
  );
}

export default Button;
