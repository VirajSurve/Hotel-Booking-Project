// import React from 'react';
// import { useCart } from 'react-use-cart';
// import "./Wishlist.css";
// import { Link } from 'react-router-dom';

// function Wishlist({ places, onWishlistClick }) {
//   const { isEmpty, totalUniqueItems, items, removeItem, emptyCart } = useCart();

//   const handleImageClick = (item) => {
//     onWishlistClick(item);
//   };

//   if (isEmpty) return <h1 className='text-center'>Your wishlist is empty</h1>;

//   return (
//     <div>
//       <div className="mt-8 ml-28 mb-8 mr-0">
//         <h1 className="text-3xl font-semibold">Wishlist ({totalUniqueItems})</h1>
//       </div>

//       <div className='centerit'>
//         <div className='container2'>
//           {items.map(item => (
//             <div key={item.id}>
//               <Link to="/page">
//                 <img
//                   className="box-img2"
//                   src={item.house}
//                   alt={item.place}
//                   onClick={() => handleImageClick(item)}
//                 />
//               </Link>
//               <h2>{item.place}</h2>
//               <button onClick={() => removeItem(item.id)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wishlist;
