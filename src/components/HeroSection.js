import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero__container">
      <video src="/videos/video-4.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero__btns">
        <Button
          className="btn"
          buttonStyle="btn__outline"
          buttonSize="btn__large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn__primary"
          buttonSize="btn__large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
