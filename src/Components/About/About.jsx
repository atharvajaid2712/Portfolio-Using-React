import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Atharva Jaid, a passionate Last-year Computer Science
              Engineering student with a keen interest in designing and
              developing innovative, visually stunning web experiences. I thrive
              on merging technical expertise with creative vision to transform
              ideas into dynamic and engaging digital realities.
            </p>
            <p>Let me know if you'd like any tweaks!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
