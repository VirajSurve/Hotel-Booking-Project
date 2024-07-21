import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import axios from 'axios';
import { useWishlist } from "../WishlistContext";

function Button({ place }) {
  const [color, setColor] = useState("white");
  const { addItem, items, removeItem } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();

  useEffect(() => {
    const itemInWishlist = wishlistItems.find(item => item.place._id === place._id);
    if (itemInWishlist) {
      setColor("red");
    } else {
      setColor("white");
    }
  }, [wishlistItems, place._id]);

  const handleClick = async () => {
    const itemInCart = items.find(item => item.id === place._id);
    if (itemInCart) {
      // Remove from cart and wishlist
      removeItem(place._id);
      setColor("white");
      try {
        await axios.delete(`http://localhost:4000/wishlist/${place._id}`);
        setWishlistItems(prev => prev.filter(item => item.place._id !== place._id));
      } catch (err) {
        console.error("Error removing from wishlist:", err);
      }
    } else {
      // Add to cart and wishlist
      const placeWithId = { ...place, id: place._id };
      addItem(placeWithId);
      setColor("red");
      try {
        const response = await axios.post('http://localhost:4000/wishlist', { placeId: place._id });
        setWishlistItems(prev => [...prev, response.data]);
      } catch (err) {
        console.error("Error adding to wishlist:", err);
      }
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
