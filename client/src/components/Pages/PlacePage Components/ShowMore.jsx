import React from "react";
import "./ShowMore.css";

function ShowMore({ close }) {
  return (
    <>
      <div className="model-wrapper1"></div>
      <div className="show-more-content flex justify-between ml-7 mr-7 mt-5 font-medium z-50">
        <div className="cir" onClick={close}>
          <i className="bi bi-chevron-left" onClick={close}></i>
        </div>
        <div className="flex gap-7">
          <button>
            <i className="bi bi-upload mr-1"></i>{" "}
            <span className="S">Share</span>
          </button>
          <button className="mr-14" id="btnh">
            <i className="bi bi-heart mr-1"></i>
            <span className="S">Save</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ShowMore;
