import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Button from "../Button.jsx";
import Header1 from "../Header/Header1.jsx";
// import Header2 from "../Header/Header2.jsx";
import Header3 from "../Header/Header3.jsx";
import MainPageFooter from "../Footer/MainPageFooter.jsx";
import "../../App.css";
import "./IndexPage.css";

function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      axios.get("http://localhost:4000/places").then((response) => {
        const refined = response.data.filter((item) =>
          item.perks.includes(category)
        );
        setPlaces(refined);
      });
    } else {
      axios.get("http://localhost:4000/places").then((response) => {
        setPlaces([...response.data]);
      });
    }
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="m-0 p-0">
      {windowWidth >= 1090 ? <Header1 /> : <Header3 />}
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
                      </div>
                    )}
                  </Link>
                </div>
              ))}
          </div>
        </CartProvider>
      </div>
      <MainPageFooter />
    </div>
  );
}
export default IndexPage;
