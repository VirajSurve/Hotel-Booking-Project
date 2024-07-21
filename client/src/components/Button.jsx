import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

function Button({ place }) {
  const [color, setColor] = useState("white");
  const { addItem, items, removeItem } = useCart();

  useEffect(() => {
    const itemInCart = items.find(item => item.id === place._id);
    if (itemInCart) {
      setColor("red");
    } else {
      setColor("white");
    }
  }, [items, place._id]);

  const handleClick = () => {
    console.log("button id", place._id);
    const itemInCart = items.find(item => item.id === place._id);
    if (itemInCart) {
      removeItem(place._id);
      setColor("white");
    } else {
      // Create a new object with an id field
      const placeWithId = { ...place, id: place._id };
      addItem(placeWithId);
      setColor("red");
    }
  };

  return (
    <button
      id="btnh"
      className="btn"
      style={{ color: color }}
      onClick={handleClick}
    >
      <i className={color === "white" ? "bi bi-heart" : "bi bi-heart-fill"}></i>
    </button>
  );
}

export default Button;
