import React, { useRef } from "react";
import "../style/project.css";
import downloadImg from "../assets/download.jpeg";

const projects = [
  {
    title: "Explain Life",
    description:
      "Life insurance policy recommendation agent website with coverage calculation using NodeJS backend (Admin & User panel).",
    skills: "ReactJs, CSS, Redux Toolkit",
    image: downloadImg,
  },
  {
    title: "Semicolon Portfolio",
    description:
      "Company portfolio showcasing services and projects, built using Next.js and Firebase.",
    skills: "NextJs, CSS, Firebase",
    image: downloadImg,
  },
  {
    title: "Fitness Administration Portal",
    description:
      "Fitness plan with workout videos, calorie tracking, and dietary recommendations.",
    skills: "ReactJs, Bootstrap",
    image: downloadImg,
  },
];

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
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
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
      <img src={project.image} alt={project.title} className="card-image" />
      <h3 className="card-title">{project.title}</h3>
      <p className="card-skills">
        <strong>Skills:</strong> {project.skills}
      </p>
      <p className="card-description">{project.description}</p>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

