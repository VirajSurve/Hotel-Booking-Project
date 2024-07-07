import React, { useState } from "react";
import './Add_guest.css';
function Add_guest() {
     const [count,setcount]=useState(0);
     function increase()
     {
      setcount(count+1);
     }
     function decrease()
     { 
      if(count>0)
        {setcount(count-1);}
     }

  return (
    <div className="cont23">
      <div className="cover23">
      <h1 className="heading23">Guest</h1>
      <h2 className="heading23a">{count}</h2>
      <button className ="button23" onClick={decrease}>-</button>
      <button className="button23" onClick={increase}>+</button>
      </div> 
    </div>
  );
}
export default Add_guest;
