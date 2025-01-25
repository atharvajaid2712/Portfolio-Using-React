import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>Education</h1>
      </div>
      <div className="content">
        <div className="content1">
          <div className="year">2017-2018</div>
          <h1>SSC-Maharashtra State Board</h1>
          <p>School Name - New English School, Landewadi</p>
          <p>Percentage - 89.60%</p>
        </div>
        <div className="content2">
          <div className="year">2021-2022</div>
          <h1>Diploma in Computer Engineering</h1>
          <p>College Name - MIT Polytechnic, Kothrud</p>
          <p>Percentage - 79.60%</p>
        </div>
        <div className="content3">
          <div className="year">2022-2025</div>
          <h1>Btech in Computer Science</h1>
          <p>University Name - Vishwakarma University</p>
          <p>Current CGPA - 7.39</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
