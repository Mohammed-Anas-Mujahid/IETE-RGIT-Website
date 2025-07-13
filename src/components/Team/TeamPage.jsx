import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamPage.css';
import { FaArrowLeft } from 'react-icons/fa';

// Importing images
import member1 from '../../Assets/Core members/prathamesh.jpeg';
import member2 from '../../Assets/Core members/parth.png';
import member3 from '../../Assets/Core members/nisha.png';
import member4 from '../../Assets/Core members/samrudhi.png';
import member5 from '../../Assets/Vedant Kini.JPG';
import member6 from '../../Assets/Core members/srishti.jpeg';
import member7 from '../../Assets/users.png';
import member8 from '../../Assets/users.png';
import member9 from '../../Assets/users.png';
import member10 from '../../Assets/users.png';
import member11 from '../../Assets/users.png';
import member12 from '../../Assets/users.png';
import member13 from '../../Assets/users.png';
import member14 from '../../Assets/users.png';
import member15 from '../../Assets/users.png';
import member16 from '../../Assets/users.png';
import member17 from '../../Assets/users.png';
import member18 from '../../Assets/users.png';
import member19 from '../../Assets/users.png';
import member20 from '../../Assets/users.png';
import member21 from '../../Assets/users.png';
import member22 from '../../Assets/users.png';
// Add all member images till member21.jpg

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  // Core Team Members with Custom Images & Names
  const coreTeamMembers = [
    { id: 1, name: "Prathamesh Kahar", post: "Chairperson", image: member1 },
    { id: 2, name: "Parth Kaskar", post: "General Secretary", image: member2 },
    { id: 3, name: "Nisha Mourya", post: "Vice Chairperson", image: member3 },
    { id: 4, name: "Samrudhi Katke", post: "Joint Secretary", image: member4 },
    { id: 5, name: "Vedant Kini", post: "Joint Secretary", image: member5 },
    { id: 6, name: "Shrishti Nayal", post: "Treasurer", image: member6 },
    { id: 7, name: "Sagar Mankar", post: "Technical Secretary", image: member7 },
    { id: 8, name: "Rahul Gogawale", post: "Technical Secretary", image: member8 },
    { id: 9, name: "Tejas Vast", post: "Digital Creative Secretary", image: member9 },
    { id: 10, name: "Snehal Raien", post: "Digital Creative Secretary", image: member10 },
    { id: 11, name: "Kapil Bharadwaj", post: "Digital Creative Secretary", image: member11 },
    { id: 12, name: "Harikesh Chauhan", post: "EM Secretary", image: member12 },
    { id: 13, name: "Isha Gangarkar", post: "EM Secretary", image: member13 },
    { id: 14, name: "Om Kodande", post: "EM Secretary", image: member14 },
    { id: 15, name: "Prasaanna Gholap", post: "Publicity Secretary", image: member15 },
    { id: 16, name: "Bhaskar Panchal", post: "Publicity Secretary", image: member16 },
    { id: 17, name: "Jatin Adhikari", post: "Publicity Secretary", image: member17 },
    { id: 18, name: "Garima Driwedi", post: "Marketing Secretary", image: member18 },
    { id: 19, name: "Mrunmai Vaze", post: "Marketing Secretary", image: member19 },
    { id: 20, name: "Sahil Narwekar", post: "Documentation Secretary", image: member20 },
    { id: 21, name: "Sumeet Maheshwar", post: "Documentation Secretary", image: member21 },
    { id: 22, name: "Yash Kadam", post: "Documentation Secretary", image: member22 },
    // Add members up to 22
  ];

  // Junior Core Team Members (Without Images)
  const juniorCoreTeam = [
    { id: 1, name: "Ashish Kumar", post: "TE Co-ordinator" },
    { id: 2, name: "Shaikh Mohd Kaif", post: "TE Co-ordinator" },
    { id: 3, name: "Mujahid Mohd Anas", post: "As. Technical Secretary" },
    { id: 4, name: "Vivek Kandu", post: "As. Technical Secretary" },
    { id: 5, name: "Harshal Lokhande", post: "As. Technical Secretary" },
    { id: 6, name: "Advait Koli", post: "As. Technical Secretary" },
    { id: 7, name: "Pushkar Mohite", post: "As. Technical Secretary" },
    { id: 8, name: "Samved Chanda", post: "As. Technical Secretary" },
    { id: 9, name: "Yash Dudhkar", post: "As. DC Secretary" },
    { id: 10, name: "Aryan Parab", post: "As. DC Secretary" },
    { id: 11, name: "Abhay Dhamal", post: "As. DC Secretary" },
    { id: 12, name: "Gaurav Kanojia", post: "As. DC Secretary" },
    { id: 13, name: "Dhruv Mhatre", post: "As. EM Secretary" },
    { id: 14, name: "Subodh Bhangre", post: "As. EM Secretary" },
    { id: 15, name: "Sudeep Jha", post: "As. EM Secretary" },
    { id: 16, name: "Rupesh Ghadge", post: "As. EM Secretary" },
    { id: 17, name: "Ameena Mufti", post: "As. Publicity Secretary" },
    { id: 18, name: "Ashirwad Pawar", post: "As. Publicity Secretary" },
    { id: 19, name: "Tejas Kadam", post: "As. Publicity Secretary" },
    { id: 20, name: "Akshay Kantharia", post: "As. Publicity Secretary" },
    { id: 21, name: "Pratik Kulawe", post: "As. Documentation Secretary" },
    { id: 22, name: "Ansari Maaz Akhtar", post: "As. Documentation Secretary" },
    { id: 23, name: "Aditya Sabale", post: "As. Documentation Secretary" },
    // Add up to 22 members
  ];

  return (
    <>
      {/* Navbar */}
      <header className="teampage-header">
        <div className="navbar">
          <div className="back-button" onClick={() => navigate('/#team')}>
            <FaArrowLeft className="back-icon" />
            <span>Back</span>
          </div>
        </div>
      </header>

      {/* Core Team Section */}
      <div className="teampage-body">
        <h2 className="core-team-title">CORE TEAM</h2>
        <div className="teampage-grid">
          {coreTeamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-photo-circle">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-post">{member.post}</p>
            </div>
          ))}
        </div>

        {/* Junior Core Team Section */}
        <h2 className="junior-core-title">JUNIOR CORE TEAM</h2>
        <div className="junior-team-grid">
          {juniorCoreTeam.map((member) => (
            <div className="junior-team-card" key={member.id}>
              <h3 className="junior-team-name">{member.name}</h3>
              <p className="junior-team-post">{member.post}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
