import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__items">
        <Link className="cards__item__link" to={props.path}>
          <figure
            className="cards__item__pic__wrap"
            data_category={props.label}
          >
            <img
              src={props.src}
              alt="TravelImage"
              className="cards__item__image"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
