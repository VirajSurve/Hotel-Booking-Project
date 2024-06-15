import Button from "./button";
import React, { useState } from "react";



function Container(props) {
  return (
    <div className="container">
      <div className="heart"><Button/></div>
      <img className="box-img" src={props.img} alt="villa" />
      <div className="rating">
        <p className="place">{props.place}</p>
        <p className="place1"><i className="bi bi-star-fill"></i>{props.rate}</p>
      </div>
      <p className="side">{props.side}</p>
      <p className="price">
        {props.price} <span id="period">night</span>
      </p>
    </div>
  );
}

export default Container;
