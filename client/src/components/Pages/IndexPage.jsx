import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "../Button.jsx";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./IndexPage.css";
// import Header from "../Header/Header.jsx";
import MainPageFooter from "../Footer/MainPageFooter.jsx";

function IndexPage() {
  const [places, setPlaces] = useState([]);
  const { category } = useParams();
  const windowWidth = useRef(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth.current <= 768);

  useEffect(() => {
    if (category) {
      axios.get("http://localhost:4000/places").then((response) => {
        //   console.log("Data:", response.data);
        // Filter places based on the perk
        const refined = response.data.filter((item) =>
          item.perks.includes(category)
        );
        //   console.log("Refined data:", refined);
        setPlaces(refined);
      });
    } else {
      axios.get("http://localhost:4000/places").then((response) => {
        setPlaces([...response.data]);
      });
    }
  }, [category]);

  return (
    <div className="m-0 p-0">
      {/* <Header /> */}
      <div className="app-container">
        <CartProvider>
          <div className="each-card">
            {places.length > 0 &&
              places.map((place) => (
                <div className="container" key={place._id}>
                  <div className="heart">
                    <Button place={place} />
                  </div>
                  <Link to={"/place/" + place._id} key={place._id}>
                    {place.photos?.[0] && (
                      <div className="mb-2">
                        <img
                          className="box-img"
                          src={
                            "http://localhost:4000/upload/" + place.photos?.[0]
                          }
                          alt=""
                        />
                        {/* <div className="bi bi-star-fill absolute bottom-5 right-3">
                          hi
                        </div> */}
                      </div>
                    )}
                  </Link>
                  <div className="varad">
                    <h2 className="font-bold leading-5">{place.address}</h2>
                  </div>
                  <p className="side">{}</p>
                  <p className="price mt-1">
                    <span className="font-bold">${place.price}</span>
                    <span id="period">night</span>
                  </p>
                </div>
              ))}
          </div>
        </CartProvider>
      </div>
      {/* {windowWidth > 800 ? <MainPageFooter /> : <MobileFooter />} */}
    </div>
  );
}

export default IndexPage;
