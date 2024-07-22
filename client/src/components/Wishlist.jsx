// // src/components/Wishlist.jsx
// import React from 'react';
// import { useCart } from 'react-use-cart';
// import './Wishlist.css';
// import { Link } from 'react-router-dom';

// function Wishlist({ items, onWishlistClick }) {
//   const { removeItem } = useCart();

//   const handleImageClick = (item) => {
//     onWishlistClick(item);
//   };

//   // if (items.length === 0) return <h1 className='text-center'>Your wishlist is empty</h1>;

//   return (
//     <div>
//       <div className="mt-8 ml-28 mb-8 mr-0">
//         <h1 className="text-3xl font-semibold">Wishlist ({items.length})</h1>
//       </div>

//       <div className='centerit'>
//         <div className='container2'>
//           {items.map(item => (
//             <div key={item._id}>
//               <Link to={`/place/${item.place._id}`}>
//                 <img
//                   className="box-img2"
//                   src={`http://localhost:4000/upload/${item.place.photos[0]}`}  // Ensure the full URL is used
//                   onClick={() => handleImageClick(item)}
//                   alt={item.place.title}
//                 />
//               </Link>
//               <h2>{item.place.title}</h2>
//               <button onClick={() => removeItem(item._id)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wishlist;
