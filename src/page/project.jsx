import React, { useRef } from "react";
import "../style/project.css";
import "../style/theme.css";
import projectsData from "../data/projects.json";

const images = {
  "filmyverse.png": require("../assets/filmyverse.png"),
  "coffee.png": require("../assets/coffee.png"),
  "club.png": require("../assets/club.png"),
  "mysite.png": require("../assets/mysite.png"),
  "profile.png": require("../assets/profile.png"),
  "authentication.png": require("../assets/authentication.png"),
  "cart.png": require("../assets/cart.png"),
  "notes.png": require("../assets/notes.png"),
  "tictactoe.png": require("../assets/tictactoe.png")
};

function ProjectCard({ project }) {
  const cardRef = useRef();

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = clamp(((centerY - y) / centerY) * 20, -20, 20);
    const rotateY = clamp(((x - centerX) / centerX) * 20, -20, 20);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    card.style.transition = "none";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.transition = "transform 0.3s ease";
  };

  return (
    <div
      className="project-card fancy-hover"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glow" />
      <img
        src={images[project.image]}
        alt={project.title}
        className="card-image"
      />
      <h3 className="card-title">{project.title}</h3>
      <p className="card-skills">
        <strong>Skills:</strong> {project.skills}
      </p>
      <p className="card-description">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}

export default function ProjectSection() {
  return (
    <div className="projects-container" id="project">
      <h2 className="project-title">My Projects</h2>
      <div className="line"></div>
      <div className="projects-slider">
        <div className="projects-track">
          {[...projectsData, ...projectsData].map((project, index) => (
            <div className="project-slide" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
