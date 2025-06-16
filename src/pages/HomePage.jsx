import React from "react";
import "./home.css"
import womanLaptop from "../images/girlimg.png";
import HeroServices from "./homecontent/HeroServices";
import CommunityBanner from "./homecontent/CommunityBanner";
import ExperienceBoxes from "./homecontent/ExperienceBoxes";
import StreelancerSteps from "./homecontent/stepscontent";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
   const navigate = useNavigate();
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"> <span className="logo-s">S</span>treelancer </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Find Work</li>
          <li>Find Talent</li>
          <li>Why Us</li>
          <li>Community</li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-outline" onClick={() => navigate("/register")}>Sign up</button>
          <button className="btn-primary" onClick={() => navigate("/login")}>Log in</button>
        </div>
      </nav>

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
            <li>✔ Smart onboarding that routes you to the right path</li>
            <li>✔ Access verified, DEI-aligned professionals instantly</li>
            <li>✔ Industry-vetted programs with mentorship</li>
          </ul>
        </div>

        <div className="hero-image">
          <div className="blob"></div>
          <img
           src={womanLaptop}
            alt="Woman with laptop"
          />
        </div>
      </section>
      <HeroServices/>
      <ExperienceBoxes/>
      <StreelancerSteps/>
      <CommunityBanner/>
    </div>
  );
};

export default HomePage;
