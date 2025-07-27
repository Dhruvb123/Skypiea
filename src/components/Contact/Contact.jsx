import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact & About Me</h1>

      <p className="contact-paragraph">
        I Dhruv Bheda, am a Software Developer, currently working at MIRAE ASSET
        SHAREKHAN, since June 2024. I graduated with a Bachelors of Technology
        in Computer Engineering from Dwarkadas.J.Sanghvi College Of Engineering,
        earning a CGPA of 9.37.
      </p>

      <p className="contact-paragraph">
        As a dedicated software developer, I believe that writing clean,
        maintainable, and efficient code is the cornerstone of building
        impactful technology. I am passionate about continuously learning new
        tools and best practices, collaborating effectively in teams, and
        delivering solutions that solve real-world problems. Strong
        problem-solving skills, attention to detail, and adaptability allow me
        to contribute meaningfully to every project I undertake.
      </p>

      <h2 className="contact-subtitle">Get in Touch</h2>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong> dhruvbheda009@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +91 8652759363
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Dhruvb123"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Dhruvb123
          </a>
        </li>
        <li>
          <strong>LeetCode:</strong>{" "}
          <a
            href="https://leetcode.com/u/dhruv0911/"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/u/dhruv0911/
          </a>
        </li>
        <li>
          <strong>Resume:</strong>{" "}
          <a
            href="https://drive.google.com/file/d/1oF-Juj7IJh6vyC4A6h8954PPuuFx4Utx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dhruv_Bheda_Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
