import './Inspirations.css';
import professor1 from '../../Assets/principal.jpeg'; // Replace with actual image path
import professor2 from '../../Assets/sanjay sir.jpeg'; // Replace with actual image path
import professor3 from '../../Assets/sutar sir.jpeg'; // Replace with actual image path
import professor4 from '../../Assets/rehmani sir.png'; // Replace with actual image path
import professor5 from '../../Assets/viplav sir.jpeg'; // Replace with actual image path

const Inspirations = () => {
  return (
    <section id="inspiration" className="inspirations-section">
      {/* Title */}
      <h1 className="inspirations-title">OUR INSPIRATIONS</h1>
      <p className="inspirations-subtitle">
        Guiding lights who shaped our journey
      </p>

      {/* Inspirations Container */}
      <div className="inspirations-container">
        {/* First Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor1} alt="Professor 1" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Dr. Sanjay Bokade</h2>
          <p className="inspiration-post">Principal</p>
        </div>
        {/* First Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor2} alt="Professor 2" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Dr. Sanjay Deshmukh</h2>
          <p className="inspiration-post">HOD, EXTC Department</p>
        </div>
        {/* Second Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor3} alt="Professor 3" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Prof. Surendra Sutar</h2>
          <p className="inspiration-post">ISF Convener</p>
        </div>
        {/* Third Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor4} alt="Professor 4" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Prof. Rehmani Akhtar</h2>
          <p className="inspiration-post">Co-Convener</p>
        </div>
        {/* Fourth Inspiration Box */}
        <div className="inspiration-box">
          <div className="profile-circle">
            <img src={professor5} alt="Professor 5" className="profile-img" />
          </div>
          <h2 className="inspiration-name">Prof. Viplav Soliv</h2>
          <p className="inspiration-post">Co-Convener</p>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;