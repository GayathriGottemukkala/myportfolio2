// HeroServices.js
import React from 'react';
import './homecontent.css';
import ServiceCard from './herocard';
import img1 from "../../images/top.png"
import img2 from "../../images/side.png"
import img3 from "../../images/top1.png"
import img4 from "../../images/side1.png"
import img6 from "../../images/side3.png"
import img5 from "../../images/side2.png"

function HeroServices() {
  return (
    <section className="hero-services">
      <h2 className="hero-title">Our Services, Your Growth</h2>
      <p className="hero-subtitle">
        Get industry-ready with the right courses, gigs, and career tools — all in one place.
      </p>

      <div className="services-grid">
        <ServiceCard
          title="Academy"
          className="bluecard"
          subtitle="Learn & Upskill"
          points={[
            "Industry-relevant courses for women, queer professionals, returnees, and the silver generation.",
            "Hands-on learning, live mentorship, real-world projects, and certifications."
          ]}
          image1={img1}
          image2={img2}
          altText="Academy"
        />

        <ServiceCard
          title="Marketplace"
          className="orgcard"
          subtitle="Find Freelance & Remote Work"
          points={[
            "Match with freelance gigs or part-time roles based on your skills and goals.",
            "Writer, Designer, Virtual Assistant (VA), SDR & more."
          ]}
           image1={img3}
          image2={img4}
          altText="Marketplace"
        />
        <ServiceCard
          title="Marketplace"
          className="orgcard"
          subtitle="Smart Registration - Guided Onboarding"
          points={[
            "Match with freelance gigs or part-time roles based on your skills and goals.",
            "Writer, Designer, Virtual Assistant (VA), SDR & more."
          ]}
           image1={img3}
          image2={img6}
          altText="Marketplace"
        />
       <ServiceCard
          title="Academy"
          className="bluecard"
          subtitle="Employers - Hire Remote DEI Women Talent"
          points={[
            "Industry-relevant courses for women, queer professionals, returnees, and the silver generation.",
            "Hands-on learning, live mentorship, real-world projects, and certifications."
          ]}
          image1={img1}
          image2={img5}
          altText="Academy"
        />
      </div>
    </section>
  );
}

export default HeroServices;
