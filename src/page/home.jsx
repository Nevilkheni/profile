import React, { useEffect, useState } from "react";
import avatar from "../assets/avtar.png";
import "../style/home.css";

function Home() {
  const fullHeading = "Hello, I'm Nevil Kheni";

  const [headingText, setHeadingText] = useState("");
  const [roleText, setRoleText] = useState("");

  useEffect(() => {
    let index = 0;
    const headingSpeed = 150;

    const typeHeading = () => {
      if (index <= fullHeading.length) {
        setHeadingText(fullHeading.substring(0, index));
        index++;
        setTimeout(typeHeading, headingSpeed);
      }
    };

    typeHeading();
  }, []);

  useEffect(() => {
    const texts = [
      "React JS Developer",
      "Next JS Developer",
      "Front-End Engineer",
    ];
    let i = 0,
      j = 0;
    let currentText = "";
    let isDeleting = false;

    const speed = 100;
    const delayBetween = 1500;

    const typeRole = () => {
      if (!isDeleting) {
        currentText = texts[i].substring(0, j++);
        setRoleText(currentText);

        if (j > texts[i].length) {
          isDeleting = true;
          setTimeout(typeRole, delayBetween);
          return;
        }
      } else {
        currentText = texts[i].substring(0, j--);
        setRoleText(currentText);

        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % texts.length;
        }
      }

      setTimeout(typeRole, isDeleting ? 60 : speed);
    };

    const headingTypingTime = fullHeading.length * 150 + 500;
    const timer = setTimeout(typeRole, headingTypingTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div>
          <h1>{headingText}</h1>
          <div className="typewriter">
            <span>{roleText}</span>
          </div>
        </div>
        <img src={avatar} alt="example" />
      </div>
    </div>
  );
}

export default Home;
