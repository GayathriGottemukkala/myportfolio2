


import { HiOutlineUserAdd, HiOutlineBookOpen, HiOutlineBriefcase } from 'react-icons/hi';
import { LuRoute } from 'react-icons/lu'; // Clean outlined route icon

const stepIcons = [
  <HiOutlineUserAdd className="step-icon" />,
  <LuRoute className="step-icon" />,
  <HiOutlineBookOpen className="step-icon" />,
  <HiOutlineBriefcase className="step-icon" />
];

const StreelancerSteps = () => {
  return (
    <div className="main-container">
      <h2 className="title">Find Your Fit, Your Way</h2>
      <p className="subtitle">
        Explore curated freelance and job-ready roles by category—designed for every stage, story, and strength.
      </p>

      {/* Top Steps */}
      <div className="steps-grid">
        {[
          { num: "01", title: "Create Your Profile", desc: "Complete your profile and take our career assessment quiz" },
          { num: "02", title: "Smart Routing", desc: "Get personalized recommendations based on your skills and goals" },
          { num: "03", title: "Learn & Build Profile", desc: "Enhance your skills and create a standout professional profile" },
          { num: "04", title: "Get Hired", desc: "Connect with employers and secure remote opportunities that match your profile" }
        ].map((step, idx) => (
          <div className="step-card" key={idx}>
            <div className="step-number">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
              {stepIcons[idx]}
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider">
        <h2>Find The Right Person For The Job</h2>
        <p>Pre-vetted, DEI-aligned remote talent</p>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="employer-box">
          <h3>Why Employers Choose Streelancer ?</h3>
          <div className="employer-point">
            <strong>Diverse Talent Pool</strong>
            <p>Access CXOs, Virtual Assistants, SDRs, Designers, and more from backgrounds.</p>
          </div>
          <div className="employer-point">
            <strong>Verified Profiles with DEI Tags</strong>
            <p>All candidates are pre-vetted with verified skills and clear diversity indicators to support your inclusion goals.</p>
          </div>
          <div className="employer-point">
            <strong>DEI Hiring Dashboard</strong>
            <p>Track and report on your diversity hiring metrics with our comprehensive analytics dashboard.</p>
          </div>
        </div>

        <div className="hire-box">
          <h3>Be a part of Streelancer .</h3>
          <ul>
            <li><b>24x7</b> Support</li>
            <li><b>Verified</b> Talent</li>
          </ul>
          <button className="hire-btn">Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default StreelancerSteps;
