import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="work">
        <div className="work-title">
          <h1>My Work</h1>
          <p>
            Here are some of my projects that i have worked on during my studies
          </p>
        </div>
        <div className="project1">
          <h1><span>Personalized Healthcare System</span> Using Machine Learning</h1>
          <p>
            We created a Healthcare System using MERN stack along with Machine
            Learning.It is a platform that the patients can use to identify
            their disease based on the symptoms and get remedies based on the
            disease.
          </p>
        </div>
        <div className="project2">
          <h1>Amazon Clone</h1>
          <p>I have created the Amazon Frontend clone using ReactJS.</p>
        </div>
        <div className="work-title">
          <h1>My Certifications</h1>
        </div>
        <div className="project1">
          <ul>
            <li>Introduction to Machine Learning</li>
            <li>Managing Machine Learning Projects</li>
            <li>Social Analytics</li>
          </ul>
        </div>
        <div className="work-title">
          <h1>My Internships</h1>
        </div>
        <div className="project1">
          <h1><span>Valethi</span></h1>
          <p>
          As a Customer Support Intern at Valethi, I efficiently responded to client emails and inquiries, provided solutions and remedies for 
customer issues, and managed product replacements and returns. I successfully handled customer support for Weber, an international 
company specializing in grills, contributing to maintaining strong customer relationships and enhancing the overall client experience. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
