import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [ifClick, setClick] = useState(false);
  const [ifButton, setButton] = useState(true);

  const handleClick = () => setClick(!ifClick);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            HARZ <i className="fas fa-fist-raised raised"></i>
          </Link>
          <div className="menu__icon" onClick={handleClick}>
            <i className={ifClick ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={ifClick ? "nav__menu active" : "nav__menu"}>
            <li className="nav__item">
              <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/products"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/sign__up"
                className="nav__links__mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {ifButton && <Button buttonStyle="btn__outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
