import "./intro.css";
import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Priya Makkar" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </article>
          </div>
          <p>
            An aspiring Software Developer and Web Developer with 1+ years of experience in coding and front end web development with which involves identifying web-based user interactions along with designing and implementing highly-responsive user interface components by deploying React + Bootstrap concepts. Proficient in translating designs and wire frames into high-quality code, and writing application interface code via JavaScript and React JS workflows along with fetching API contents. Passionate about technology and enjoy solving complex problems through coding. Familiar with development tools like Visual Studio Code, Git Hub, and Vercel for deployment. Adaptive to workflow environment with leadership skills, teamwork and effective communication. Ability to learn quickly, adapting to new challenges seamlessly.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
