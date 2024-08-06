import React from "react";
import { useGlobal } from "../Provider";
import "./LeftSide.css";
import "./BookCart.css";

function BookCart() {
  const { url, place, side, rate, review, price } = useGlobal();
  console.log("Image URL:", url); // Debugging line
  return (
    <div className="book-page1">
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

      <div className="top-box">
        <div className="mb-2">
          <p className="text-2xl font-semibold">Your trip</p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-medium">Dates</p>
              <p>21–26 Sep</p>
            </div>
            <div className="underline font-medium cursor-pointer">Edit</div>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-medium">Guests</p>
              <p>1 guest</p>
            </div>
            <div className="underline font-medium cursor-pointer">Edit</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="horizontal-line"></div>
      </div>

      <div className="Middle-box">
        <p className="text-2xl font-semibold">Price details</p>
        <div className="flex justify-between mt-2">
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
    </div>
  );
}

export default BookCart;
