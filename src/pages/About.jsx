import React, { useState } from "react";
import bgImg from "/assets/images/about-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="about-page-container">
      <img
        src={bgImg}
        className="about-hero-image"
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded && (
        <>
          <div className="about-page-content">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="about-page-cta">
            <h2>
              Your destination is waiting.
              <br />
              Your van is ready.
            </h2>
            <Link className="link-button" to="/vanlifeweb/vans">
              Explore our vans
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
