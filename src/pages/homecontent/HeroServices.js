// HeroServices.js
import React from 'react';
import './homecontent.css';
import ServiceCard from './herocard';

import img1 from "../../images/side1.png"
import img2 from "../../images/side2.png"
import img3 from "../../images/side3.png"
import img4 from "../../images/side4.png"
import icon1 from "../../images/img1.png"
   import icon2 from  "../../images/img2.png"
   import icon3 from  "../../images/img3.png"
      import icon4 from  "../../images/img4.png"

function HeroServices() {
  return (
    <section className="hero-services">
      <h2 className="hero-title">Our Services, Your Growth</h2>
      <p className="hero-subtitle">
        Get industry-ready with the right courses, gigs, and career tools — all in one place.
      </p>

      <div className="services-grid">
       
        <ServiceCard
          title="Remote"
          className="bluecard"
          subtitle="Women Workforce"
          points={[
            "Industry-relevant courses for women, queer professionals, returnees, and the silver generation.",
            "Hands-on learning, live mentorship, real-world projects, and certifications."
          ]}
          img={icon1}
          mainImage={img1}
          
       
          altText="Academy"
        />

        <ServiceCard
          title="Global"
          className="orgcard"
          subtitle="Flexwork Network"
          points={[
            "Match with freelance gigs or part-time roles based on your skills and goals.",
            "Writer, Designer, Virtual Assistant (VA), SDR & more."
          ]}
           img={icon2}
           mainImage={img2}
      
          altText="Marketplace"
        />
        <ServiceCard
          title="DEI Talent"
          className="orgcard"
          subtitle="Network"
          points={[
            "Personalized journey based on your career goals and experience.",
            "AI-powered skill assessment, custom recommendations, and career path mapping."
          ]}
           img={icon3}
           mainImage={img3}
       
          altText="Marketplace"
        />
       <ServiceCard
          title="Remote Woman"
          className="bluecard"
          subtitle="Workforce."
          points={[
            "Access pre-vetted, remote-ready women across industries",
            "HFast closures, flexible formats, zero infra cost."
          ]}
           img={icon4}
          mainImage={img4}
          icons={[icon1,icon2,icon3]}
          altText="Academy"
        />
      </div>
    </section>
  );
}

export default HeroServices;
