// // ServiceCard.js
// import React from 'react';

 

// function ServiceCard({ title, subtitle, points,img, mainImage, altText,className }) {
//   return (

//         <div className={`service-card ${className || ''}`}>
//       <h3>{title} –</h3>
//       <h4>{subtitle}</h4>
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul>
//       <div class="grid-container">
//   <img src={img}  class="left-image" />
//  <button className="learn-button">Learn More</button>
//   <img src={mainImage} class="right-image" />
// </div>
      
//       {/* <img src={image} alt={altText} className="card-image" /> */}
//     </div>



   

//   );
// }

// export default ServiceCard;

import React from 'react';

function ServiceCard({ title, subtitle, points, img, mainImage, altText, className }) {
  return (
    <div className={`service-card ${className || ''}`}>
      <h3>{title} –</h3>
      <h4>{subtitle}</h4>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="grid-container">
        <div>
        <img src={img} className="left-image" alt={altText} />
        <button className="learn-button">Learn More</button>
        </div>
        <img src={mainImage} className="right-image img-fluid" alt={altText} />
      </div>
    </div>
  );
}

export default ServiceCard;
