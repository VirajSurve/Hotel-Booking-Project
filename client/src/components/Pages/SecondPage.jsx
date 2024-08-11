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
import LeftSide from "../Booking/LeftSide.jsx";
import Chart from "./PlacePage Components/Chart.jsx";

export default function SecondPage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setAllPhotos] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [always, setAlways] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    price: 0,
    startDate: null,
    endDate: null,
  });

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
      <Header2 />
      <div className="mt-5">
        <div className="parent-container">
          <Title place={place} />
          <Images
            place={place}
            showAllPhotos={showAllPhotos}
            setAllPhotos={setAllPhotos}
          />
          <Information place={place} setBookingDetails={setBookingDetails} />
          <Mapp place={place} />
        </div>
      </div> */}

      {/* {/* <MainPageFooter /> */}
      <Chart price={bookingDetails.price} date={bookingDetails.startDate} />
      {always && <LeftSide place={place} />}
    </>
  );
}
