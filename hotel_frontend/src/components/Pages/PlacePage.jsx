import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlacePage.css";
import Title from "./PlacePage Components/Title";
import Images from "./PlacePage Components/images";
import Information from "./PlacePage Components/Information";
import Reviews from "./PlacePage Components/Reviews";

export default function PlacesPage() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [showAllPhotos, setAllPhotos] = useState(false);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/places/${id}`).then(response => {
                setPlace(response.data);
            })
        }
    }, [id]);

    if (!place) return "";

    console.log("showAllPhotos:", showAllPhotos);
    console.log(place.name);
    // if (showAllPhotos) {
    //     return (
    //         <div className='fixed bg-black min-w-full min-h-screen flex items-center justify-center'>
    //             Hi    
    //         </div>
    //     );
    // }

    return (
        <div className="mt-5">
            <div className='parent-container'>
                <Title place={place} />
                <Images place={place} showAllPhotos={showAllPhotos} setAllPhotos={setAllPhotos} />
                <Information place={place} />
                <Reviews place={place} />
            </div>
        </div>
    );
}
