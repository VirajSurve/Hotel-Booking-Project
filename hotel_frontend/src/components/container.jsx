// import React from "react";
// import Button from "./button";

// function Container(props) {
//   return (
//     <div className="container">
//       <Button />
//       <img className="box-img" src={props.img} alt="villa" />
//       <p className="place">{props.place}</p>
//       <p className="side">{props.side}</p>
//       <p className="price">
//         {props.price} <span id="period">night</span>
//       </p>
//     </div>
//   );
// }
// export default Container;
import React from "react";
import Button from "./button";

function Container(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Button taking full width on all screen sizes */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <Button />
      </div>
      
      {/* Image taking full width on all screen sizes */}
      <img className="col-span-1 md:col-span-2 lg:col-span-3 object-cover w-full h-64 rounded-lg" src={props.img} alt="villa" />
      
      {/* Place, Side, and Price */}
      <p className="col-span-1 font-bold text-gray-900">{props.place}</p>
      <p className="col-span-1 text-gray-600">{props.side}</p>
      <p className="col-span-1 text-gray-700">
        {props.price} <span className="text-gray-500">/ night</span>
      </p>
    </div>
  );
}

export default Container;

