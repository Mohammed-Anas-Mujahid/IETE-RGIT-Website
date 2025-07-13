import React from 'react';
import './Magazine.css';

import magazine2024 from '../../Assets/Magazine/magazine2024.jpeg';
import magazine2023 from '../../Assets/Magazine/magazine2023.jpeg';
import magazine2018 from '../../Assets/Magazine/magazine2018.jpeg';
import magazine2017 from '../../Assets/Magazine/magazine2017.jpeg';
import magazine2015 from '../../Assets/Magazine/magazine2015.jpeg';
import magazine2014 from '../../Assets/Magazine/magazine2014.jpeg';

const magazines = [
  { year: 2024, image: magazine2024, pdf: 'https://drive.google.com/file/d/1aDy99-iSOcJwSC7VRyaDhyKhOzeFAe5L/view?usp=sharing' },
  { year: 2023, image: magazine2023, pdf: 'https://drive.google.com/file/d/1pCYpq15wVxiQGEabMu3MUIJ6Khs2pZPh/view?usp=sharing' },
  { year: 2018, image: magazine2018, pdf: 'https://drive.google.com/file/d/1BLmc2aXcybhRsy2fkXMo_kE5IE_LPOgQ/view?usp=sharing' },
  { year: 2017, image: magazine2017, pdf: 'https://drive.google.com/file/d/1r1KBOqz0P4uGq-xvw3o7gbWWIyXeyRsT/view?usp=sharing' },
  { year: 2015, image: magazine2015, pdf: 'https://drive.google.com/file/d/1UOHq4YVhyca-ln8RsUJIL3u9SeLz5qtx/view?usp=sharing' },
  { year: 2014, image: magazine2014, pdf: 'https://drive.google.com/file/d/1pYuiPVz3UsAbWYeM4BR3IlCA6Q4CatbB/view?usp=sharing' },
];

function Magazine() {
  return (
    <section id="magazine" className="magazinesection">
      {/* Title and Description */}
      <h1 className="magazine-title">IETE MAGAZINE</h1>
      <p className="magazine-description">
        Explore the latest articles and updates in technology and innovation with ILUMINAR
      </p>

      {/* Magazine Grid */}
      <div className="magazine-grid">
        {magazines.map((magazine, index) => (
          <div
            key={index}
            className="magazine-box"
            onClick={() => window.open(magazine.pdf, '_blank')} 
          >
            <img
              src={magazine.image}
              alt={`Magazine ${magazine.year}`}
              className="magazine-image"
            />
            <div className="hover-year">{magazine.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Magazine;
