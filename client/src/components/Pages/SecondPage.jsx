import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SecondPage.css";
import Title from "./PlacePage Components/Title.jsx";
import Images from "./PlacePage Components/images.jsx";
import Information from "./PlacePage Components/Information.jsx";
import Reviews from "./PlacePage Components/Reviews.jsx";
import Mapp from "./PlacePage Components/Mapp.jsx";
import Header2 from "../Header/Header2.jsx";
import MainPageFooter from "../Footer/MainPageFooter.jsx";

export default function SecondPage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setAllPhotos] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/places/${id}`).then((response) => {
        setPlace(response.data);
      });
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
    <>
      <Header2 />
      <div className="mt-5">
        <div className="parent-container">
          <Title place={place} />
          <Images
            place={place}
            showAllPhotos={showAllPhotos}
            setAllPhotos={setAllPhotos}
          />
          <Information place={place} />
          <Mapp place={place} />
          {/* <Reviews place={place} /> */}
        </div>
      </div>
      <MainPageFooter />
    </>
  );
}
