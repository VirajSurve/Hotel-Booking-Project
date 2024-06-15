import React from "react";
import Container from "./container";
import Places from "../places";

function App() {
  return (
    <div className="each-card">
      {Places.map((placess, index) => (
        <Container
          key={index}
          img={placess.imgURL}
          place={placess.place}
          side={placess.side}
          price={placess.price}
        />
      ))}
    </div>
  );
}


export default App;
