import React from "react";
import "./HeroSection.css";
import Kid from "../assets/kid2.png";

export const Hero = () => {
  return (
    <section className="container">
      <div className="content">
        <span className="textWrapper">
          <h1 className="title">Hi, I'm Arpit</h1>
          <p className="description">
          I'm a Frontend Developer and Data Scientist with 1 year of experience working with React and analyzing data using various tools and techniques. 
          Reach out if you'd like to learn more!
          </p>
          <a href="mailto:arpitg125@gmail.com" className="contactBtn">
            Contact Me
          </a>
        </span>
      </div>
      <span className="imageWrapper">
        <img src={Kid} alt="Ada smiling" className="heroImg" />
      </span>
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};
