import React, { useState } from "react";
import "./home.css";
import womanLaptop from "../images/girlimg.png";
import girlImg from "../images/girlimg1.png";
import ellipse1 from "../images/elicpse1.png";
import ellipse2 from "../images/elicpse2.png";
import ellipse3 from "../images/elicpse3.png";
import ellipse4 from "../images/elicpse4.png";
import ellipse5 from "../images/elicpse5.png";
import ellipse6 from "../images/elicpse6.png";
import HeroServices from "./homecontent/HeroServices";
import CommunityBanner from "./homecontent/CommunityBanner";
import ExperienceBoxes from "./homecontent/ExperienceBoxes";
import StreelancerSteps from "./homecontent/stepscontent";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={require("../images/logo.png")} alt="Streelancer Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : "close"}`}>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Find Work</li>
          <li onClick={() => setMenuOpen(false)}>Find Talent</li>
          <li onClick={() => setMenuOpen(false)}>Why Us</li>
          <li onClick={() => setMenuOpen(false)}>Community</li>
          <li onClick={() => setMenuOpen(false)}> <button className="btn-outline" onClick={() => navigate("/register")}>
            Sign up
          </button></li>
          <li onClick={() => setMenuOpen(false)}>  <button className="btn-primary" onClick={() => navigate("/login")}>
            Log in
          </button></li>
        </ul>

        {/* <div className="nav-buttons desktop-only">
          <button className="btn-outline" onClick={() => navigate("/register")}>
            Sign up
          </button>
          <button className="btn-primary" onClick={() => navigate("/login")}>
            Log in
          </button>
        </div> */}

        

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </nav>

      {/* Mobile Buttons */}
      {/* {menuOpen && (
        <div className="nav-buttons-mobile">
          <button
            className="btn-outline"
            onClick={() => {
              navigate("/register");
              setMenuOpen(false);
            }}
          >
            Sign up
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
          >
            Log in
          </button>
        </div>
      )} */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Restart. Rise. Thrive.</h1>
          <p>India's largest women-first platform for inclusive career building.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Register Now</button>
            <button className="btn-outline">Join Academy</button>
          </div>
          <ul className="features">
            <li><span>✔</span> Smart onboarding that routes you to the right path</li>
            <li><span>✔</span> Access verified, DEI-aligned professionals instantly</li>
            <li><span>✔</span> Industry-vetted programs with mentorship</li>
          </ul>
        </div>

        <div className="hero-image">
          <img src={womanLaptop} alt="Woman with laptop" />
        </div>

        {/* <div className="hero-container">
      <div className="bg-shape"></div>

      <img src={ellipse6} alt="ellipse1" className="ellipse ellipse1" />
      <img src={ellipse4} alt="ellipse2" className="ellipse ellipse2" />
       <img src={ellipse2} alt="ellipse6" className="ellipse ellipse6" />
      <img src={ellipse3} alt="ellipse3" className="ellipse ellipse3" />
      <img src={ellipse5} alt="ellipse4" className="ellipse ellipse4" />
      <img src={ellipse5} alt="ellipse5" className="ellipse ellipse5" />

      <img src={girlImg} alt="Girl working" className="girl-img" />
    </div> */}
      </section>

      <HeroServices />
      <ExperienceBoxes />
      <StreelancerSteps />
      <CommunityBanner />
    </div>
  );
};

export default HomePage;
