import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <div className="about-head">
        <h1>About</h1>
        <p>
        Everyone wants to know this, so read on and get to now you better 
        </p>
      </div>
      <div className="about-container">
        <section className="about">
          <div className="about-image">
            <img src="About.jpg" alt="" />
          </div>
          <div className="about-content">
            <h2>News Buddy Get in Touch With social News Website</h2>
            <p className="upper-text">
              These News App collects articles from a large pool of sources ,
              and incorporate different types of reporting, so instead of
              getting stories just from the India Times or a local news station,
              you'll get a good mix{" "}
            </p>
            <h2>Technology Used</h2>
            <p>
              <ol>
                <li>React</li>
                <li>NewsAPI</li>
                <li>JavaScript</li>
                <li>JavaScript and XML (JsX)</li>
              </ol>
            </p>
            <Link className="read" to="/contact">
              See More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;