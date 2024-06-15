import React from "react";
import Button from "./button";

function Container(props) {
  return (
    <div className="container">
      <div className="heart"><Button /></div>
      
      <img className="box-img" src={props.img} alt="villa" />
      <p className="place">{props.place}</p>
      <p className="side">{props.side}</p>
      <p className="price">
        {props.price} <span id="period">night</span>
      </p>
    </div>
  );
}

export default Container;
