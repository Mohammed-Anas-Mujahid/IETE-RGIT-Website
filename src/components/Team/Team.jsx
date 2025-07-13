import React from 'react';
import './Team.css';
import member1 from '../../Assets/Core members/prathamesh.jpeg'; // Replace with actual images
import member2 from '../../Assets/Core members/parth.png';
import member3 from '../../Assets/Core members/nisha.png';
import member4 from '../../Assets/Core members/samrudhi.png';
import member5 from '../../Assets/Vedant Kini.JPG';
import member6 from '../../Assets/Core members/srishti.jpeg';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { id: 1, name: 'Prathamesh Kahar', post: 'Chairperson', image: member1 },
    { id: 2, name: 'Parth S. Kaskar', post: 'General Secretary', image: member2 },
    { id: 3, name: 'Nisha Mourya', post: 'Vice Chairperson', image: member3 },
    { id: 4, name: 'Samrudhi Katke', post: 'Joint Secretary', image: member4 },
    { id: 5, name: 'Vedant Kini', post: 'Joint Secretary', image: member5 },
    { id: 6, name: 'Srishti Nayal', post: 'Treasurer', image: member6 },
  ];

  return (
    <section id="team" className="team-section">
      {/* Section Title */}
      <h2 className="team-title">MEET OUR TEAM</h2>
      <p className="team-subtitle">
        Together, we innovate, inspire, and create a future we can all be proud of.
      </p>

      {/* Team Members */}
      <div className="team-grid1">
        {teamMembers.map((member) => (
          <div className="team-card1" key={member.id}>
            <div className="team-photo-circle1">
              <img src={member.image} alt={member.name} className="team-img1" />
            </div>
            <h3 className="team-name1">{member.name}</h3>
            <p className="team-post1">{member.post}</p>
          </div>
        ))}
      </div>

      {/* View All Members Button */}
      <button
        className="view-all-btn"
        onClick={() => navigate('/teampage')} // Navigates to TeamPage.jsx
      >
        View All Members
      </button>
    </section>
  );
};

export default Team;
