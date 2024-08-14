import React, { useContext, useState } from "react";
import "./Header3.css";
import Nav2 from "../Nav2";
import header3searchicon from "./search-4-svgrepo-com.svg";
function Header3()
{
    return(
       
        <div classname="head2cont z-999">
        <div className="header3search fixed z-999">
                <img  className ="header3icon" src={header3searchicon} />
                <input  className="inputholder2" type="text" placeholder="Where to?" />
        </div>
        <div className="patta"></div>
        <div className="fixed z-100">
        <Nav2 />
        </div>
        </div>
        
    );
}
export default Header3;