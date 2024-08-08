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
import Imagesmore from "./PlacePage Components/Imagesmore.jsx";
import Header3 from "../Header/Header3.jsx";

export default function SecondPage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setAllPhotos] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/places/${id}`).then((response) => {
        setPlace(response.data);
      });
    }
  }, [id]);
  if (!place) return "";
  return (
    <>
      <Header3 />
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
      {display && (
        <Imagesmore
          place={place}
          showAllPhotos={showAllPhotos}
          setAllPhotos={setAllPhotos}
        />
      )}
    </>
  );
}
