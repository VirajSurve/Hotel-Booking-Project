import React, { useEffect, useState } from 'react';
import Wishlist from './Wishlist';
import { CartProvider } from 'react-use-cart';
// import Header2 from './Header/Header2';
import Footer from './Footer';
import Header from './Header/Header';
import axios from 'axios';

function ThirdPage() {
//   const { setUrl, setPlace, setSide, setPrice, setSpace, setUrl1, setUrl2, setUrl3, setUrl4, setRate, setReview, setIcon1, setIcon2 } = useGlobal();
const [places,setPlaces]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:4000/places").then(response=>{
        setPlaces([...response.data]);
    });
    console.log("ThirdPage:",places);
},[]);

  const handleWishlistClick = (placess) => {
    // setUrl(placess.house);
    // setPlace(placess.place);
    // setSide(placess.side);
    // setPrice(placess.price);
    // setSpace(placess.space);
    // setRate(placess.rate);
    // setUrl1(placess.interior);
    // setUrl2(placess.living);
    // setUrl3(placess.kitchen);
    // setUrl4(placess.bathroom);
    // setReview(placess.reviews);
    // setIcon1(placess.icon1);
    // setIcon2(placess.icon2);
  };

  return (
    <CartProvider>
      {/* <Header /> */}
      <hr />
      <Wishlist places={places} onWishlistClick={handleWishlistClick} />
      <Footer/>
    </CartProvider>
  );
}

export default ThirdPage;
