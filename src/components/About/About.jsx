import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Title Section */}
      <div className="about-header">
        <h1 className="about-title">ABOUT US</h1>
        <p className="about-description">
          IETE is a committee dedicated to enriching the lives of students. We offer academic, social, and professional development opportunities to foster well-rounded individuals.
        </p>
      </div>

      {/* Vision and Mission Boxes */}
      <div className="about-box-container">
        <div className="about-box">
          <h2 className="box-title">Vision</h2>
          <p className="box-content">
            Reaching the unreached and empowering the youth through Technical Education and Skill Development.
          </p>
        </div>
        <div className="about-box">
          <h2 className="box-title">Mission</h2>
          <p className="box-content">
            Advancement of Electronics, Telecommunication, Information Technology & other related disciplines; to contribute in nation's Human Resource & Infrastructure Development through our engineers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
