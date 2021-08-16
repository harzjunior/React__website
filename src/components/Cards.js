import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the EPIC Destinations!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall Deep inside the Amazon Jungle"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a private Cruise"
              label="Luxury"
              path="/Services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Eperience Football on Top of the Himilayan Moutains"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting Unchantered Waters"
              label="Mistery"
              path="/Services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided Camel tour"
              label="Adventure"
              path="/Services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
