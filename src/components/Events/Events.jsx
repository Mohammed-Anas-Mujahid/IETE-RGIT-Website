import { useState, useEffect, useCallback } from "react";
import "./Events.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Importing images
import image1 from "../../Assets/tech.jpeg";
import image2 from "../../Assets/nontech.jpeg";
import image3 from "../../Assets/IV.jpeg";

const Events = () => {
  const images = [
    {
      src: image1,
      title: "Technical Workshops",
      description:
        "IETE ISF RGIT organizes hands-on workshops that equip students with foundational knowledge related to their academic projects and industry-relevant technologies. These workshops focus on:- Arduino, FPGA, STM 32, HFSS and other software/hardware related to electronics and telecommunication.These sessions help students gain practical experience with the tools and devices they will encounter in their coursework and professional careers.",
    },
    {
      src: image2,
      title: "Non Technical Events",
      description:
        "Beyond technical training, IETE ISF RGIT conducts non-technical events aimed at career development and industry readiness, including: IETE Day Celebrations, Career Guidance Workshops, LinkedIn & Resume Building Workshops",
    },
    {
      src: image3,
      title: "Industrial Visits",
      description:
        "Hands-on industry exposure is a crucial aspect of EXTC. IETE ISF RGIT organizes industrial visits (IVs) to leading technology and communication hubs, including: CETTM, Powai, BSNL Earth Station, CIII, Kharghar",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // ✅ Memoize functions to avoid stale closure in useEffect
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // ✅ Auto-scroll effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [nextImage]);

  return (
    <section id="events" className="events-section">
      <h2 className="events-title">EVENTS</h2>

      <p className="events-description">
        IETE ISF RGIT actively conducts a variety of technical and non-technical events throughout the academic year, fostering knowledge, skill development, and industry exposure for students.
      </p>

      <div className={`image-box ${isExpanded ? "expanded" : ""}`}>
        <FaChevronLeft className="arrow left-arrow" onClick={prevImage} />

        <div className="image-container">
          <img src={images[currentIndex].src} alt="Event" className="event-image" />
          <div className="image-hover-text">
            <h3>{images[currentIndex].title}</h3>
            <p>{images[currentIndex].description}</p>
          </div>
        </div>

        <FaChevronRight className="arrow right-arrow" onClick={nextImage} />
      </div>

      {!isExpanded && (
        <button className="view-more-btn" onClick={() => setIsExpanded(true)}>
          View More
        </button>
      )}

      {isExpanded && (
        <div className="expanded-content">
          <h3>Archives</h3>
          <a
            href="https://drive.google.com/file/d/1xqlG4Mkb4VSX1pfdN-0Ll6cXI9KWY3ru/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="archive-link"
          >
            Events 2023-24
          </a>
        </div>
      )}
    </section>
  );
};

export default Events;
