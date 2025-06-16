// ServiceCard.js
import React from 'react';


function ServiceCard({ title, subtitle, points, image1,image2, altText,className }) {
  return (

        <div className={`service-card ${className || ''}`}>
      <h3>{title} –</h3>
      <h4>{subtitle}</h4>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div class="grid-container">
  <img src={image1}  class="left-image" />
 <button className="learn-button">Learn More</button>
  <img src={image2} class="right-image" />
</div>
      
      {/* <img src={image} alt={altText} className="card-image" /> */}
    </div>
  );
}

export default ServiceCard;
