import "./Any_where.css";
import React from 'react';
import pick from "./images.jpg";
function Anywhere() {
    return (
        <div>
            <div className="searchkar">
                <img className="any_image" src={pick} alt="Search Icon" />
                <input className="any_input" type="text" placeholder="  Search..." />
            </div>
        </div>
    );
}

export default Anywhere;