import React from "react";
import { useGlobal } from "../Provider";
import "./LeftSide.css";

function LeftSide() {
  const { url, place, side, rate, review, price } = useGlobal();
  console.log("Image URL:", url); // Debugging line
  return (
    <div className="book-page">
      <div className="top-box flex">
        <div className="img-div mr-5">
          <img src={url} alt={url} className="book-img" />
        </div>
        <div className="flex items-center">
          <div>
            <p>{place}</p>
            <p className="text-gray-500">{side}</p>
            <p>
              <i className="bi bi-star-fill"></i>
              {rate} <span className="text-gray-500">({review} reviews)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>
      <div className="Middle-box">
        <p className="text-2xl font-semibold">Price details</p>
        <div className="flex justify-between mt-5">
          <p>$81,611.24 x 5 nights</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>
      <div className="Middle-box">
        <div className="flex justify-between">
          <p className="text-base font-medium">Total (INR)</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>
      <div className="last-box">
        <p className="text-sm text-gray-700">
          This property requires a {price} security deposit. It will be
          collected separately by the property prior to your arrival or at
          check-in.
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
