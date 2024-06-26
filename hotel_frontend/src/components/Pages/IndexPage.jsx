import Nav from "../Nav";
import Header from "../Navbar/Header";
import Appp from "../Appp.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../button.jsx";
import "../../App.css";
import { Link } from "react-router-dom";

function IndexPage(){
    const [places,setPlaces]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/places").then(response=>{
            setPlaces([...response.data]);
        });
    },[])
    return(
        <>
        <Nav />
        <div className="mt-4 gap-x-8 gap-y-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 && places.map(place => (
            <Link to={'/place/' + place._id} key={place._id} className="container">
                <div className="heart"><Button/></div>
                <div className="">
                    <div className="mb-2">
                    {place.photos?.[0] && (
                        <div>
                        <img className=" relative box-img" src={'http://localhost:4000/upload/'+place.photos?.[0]} alt="" />
                        <div className=" bi bi-star-fill absolute bottom-5 right-3">
                        hi
                        </div>
                        </div>
                    )}
                    </div>
                    <h2 className="font-bold leading-5">{place.address}</h2>
                    <h3 className="place text-sm truncate text-gray-500">{place.title}</h3>
                    
                </div>
                <p className="side">{}</p>
                <p className="price mt-1">
                   <span className="font-bold"> ${place.price} </span><span id="period">night</span>
                </p>
                </Link>
            ))}
        </div>
            
        </>
    );
}

export default IndexPage;