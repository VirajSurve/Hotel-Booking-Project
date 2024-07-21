// WishlistPage.jsx
import React, { useEffect } from 'react';
import { useWishlist } from '../WishlistContext';
import axios from 'axios';
import './Wishlist.css';
import { Link } from 'react-router-dom';

function Wishlist() {
  const { wishlistItems, setWishlistItems } = useWishlist();

  useEffect(() => {
    axios.get('http://localhost:4000/wishlist')
      .then(response => {
        setWishlistItems(response.data);
      })
      .catch(err => {
        console.error('Error fetching wishlist:', err);
      });
  }, [setWishlistItems]);

  const handleRemoveItem = (itemId) => {
    axios.delete(`http://localhost:4000/wishlist/${itemId}`)
      .then(() => {
        setWishlistItems(wishlistItems.filter(item => item._id !== itemId));
      })
      .catch(err => {
        console.error('Error removing wishlist item:', err);
      });
  };

  if (wishlistItems.length === 0) return <h1 className='text-center'>Your wishlist is empty</h1>;

  return (
    <div>
      <div className="mt-8 ml-28 mb-8 mr-0">
        <h1 className="text-3xl font-semibold">Wishlist ({wishlistItems.length})</h1>
      </div>

      <div className='centerit'>
        <div className='container2'>
          {wishlistItems.map(item => (
            <div key={item._id}>
              <Link to={`/place/${item.place._id}`}>
                <img
                  className="box-img2"
                  src={`http://localhost:4000/upload/${item.place.photos[0]}`}
                  alt={item.place.title}
                />
              </Link>
              <h2>{item.place.title}</h2>
              <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
