import React from 'react'
import { Link } from "react-router-dom";

function Title({place}) {
  return (
    <div>
      <div className='front'>
        <h1 className='title'>{place.title}</h1>
        <div className='right-side'>
        <Link to="/"><button ><i class="bi bi-house"></i><span> Back to Home</span></button></Link>
        <button className='icon'><i class="bi bi-upload"></i> <span>Share</span></button>
        </div>
      </div>
    </div>
  )
}

export default Title;
