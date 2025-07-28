import React from "react";
import "../style/skill.css";

import htmlImg from "../assets/html.svg";
import githubImg from "../assets/github.svg";
import cssImg from "../assets/css.png";
import gitbashImg from "../assets/gitlib.svg";
import jsImg from "../assets/javascript.svg";
import gitlabImg from "../assets/gitlab.svg";
import reactImg from "../assets/React.svg";
import tailwindImg from "../assets/tailwind-.png";
import bootstrapImg from "../assets/bootstrap.svg";
import firebaseImg from "../assets/Firebase..svg";
import nextjsImg from "../assets/Next.svg";
import reduxImg from "../assets/redux.png";

const skills = [
  { name: "HTML", img: htmlImg },
  { name: "Github", img: githubImg },
  { name: "CSS", img: cssImg },
  { name: "GitBash", img: gitbashImg },
  { name: "JavaScript", img: jsImg },
  { name: "GitLab", img: gitlabImg },
  { name: "ReactJS", img: reactImg },
  { name: "Tailwind CSS", img: tailwindImg },
  { name: "Bootstrap", img: bootstrapImg },
  { name: "Firebase", img: firebaseImg },
  { name: "NextJS", img: nextjsImg },
  { name: "Redux", img: reduxImg },
];

export default function SkillsSection() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="line"></div>
      <div className="slider">
        <div className="slide-track">
          {skills.concat(skills).map((skill, index) => (
            <div className="slide" key={index}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}