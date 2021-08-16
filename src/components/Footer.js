import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <section className="footer__subscription">
        <p className="footer__subscription__heading">
          Join the Adventure newsLetter to service our best vacation deals
        </p>
        <p className="footer__subscription__text">
          Your can unsubscribe at any time.
        </p>
        <div className="input__areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer__input"
            />
            <Button className="btn__outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link__wrapper">
          <div className="footer__link__items items">
            <h2>About Us</h2>
            <Link to="/SignUp">How it Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer__link__items items">
            <h2>Contact Us</h2>
            <Link to="/SignUp">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destination</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer__link__wrapper">
          <div className="footer__link__items items">
            <h2>Videos</h2>
            <Link to="/SignUp">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link__items">
            <h2>Social Media</h2>
            <Link className="facebook fb" to="/SignUp">
              Facebook
            </Link>
            <Link className="github" to="/">
              Github
            </Link>
            <Link className="youtube" to="/">
              Youtube
            </Link>
            <Link className="instagram" to="/">
              Instagram
            </Link>
            <Link className="twitter" to="/">
              Twitter
            </Link>
            <Link className="snapchat" to="/">
              Snaptchat
            </Link>
            <Link className="linkedin" to="/">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media__wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              HARZ <i className="fas fa-fist-raised"></i>
            </Link>
          </div>
          <small className="website__rights copyRight">© 2021 HARZ </small>
          <div className="social__icons">
            <Link
              className="social__icon__link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f facebook"> </i>
            </Link>
            <Link
              className="social__icon__link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github"> </i>
            </Link>
            <Link
              className="social__icon__link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube "> </i>
            </Link>
            <Link
              className="social__icon__link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"> </i>
            </Link>
            <Link
              className="social__icon__link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"> </i>
            </Link>
            <Link
              className="social__icon__link snapchat"
              to="/"
              target="_blank"
              aria-label="SnapChat"
            >
              <i className="fab fa-snapchat"> </i>
            </Link>
            <Link
              className="social__icon__link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"> </i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
