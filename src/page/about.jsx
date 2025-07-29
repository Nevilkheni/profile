import React from "react";
import avatar from "../assets/avtar.png"; 
import "../style/about.css";
import '../style/theme.css'; 


function About() {
  return (
    <div className="about"  style={{ backgroundColor: "inherit" }}>
      <div className="about-content">
        <div className="bio-section">
          <h2>About Me</h2>
          <p className="bio">
            I'm <strong>Nevil Kheni</strong>, a passionate Front-End Developer with a sharp focus on modern web technologies. I specialize in building fast, responsive, and accessible user interfaces using React.js, Next.js, and Tailwind CSS.
          </p>
          <p className="bio">
            With over 6 month of experience crafting web applications, I’ve worked on dynamic portfolios, e-commerce dashboards, and interactive landing pages. I enjoy solving UI/UX challenges and writing clean, scalable code.
          </p>
          <p className="bio">
            Beyond code, I love staying up-to-date with the latest in tech, contributing to open-source projects, and continuously learning to grow as a developer.
          </p>

          <h3>Key Skills</h3>
          <ul className="skills-list">
            <li>✅ React.js / Next.js</li>
            <li>🎨 HTML, CSS, Sass, Tailwind CSS</li>
            <li>⚙️ JavaScript (ES6+)</li>
            <li>🧰 Git, GitHub, VS Code</li>
            <li>🧪 Jest, React Testing Library</li>
          </ul>

          <h3>Experience Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>2024 – Present</h4>
              <p>Front-End Developer (Freelance)</p>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
