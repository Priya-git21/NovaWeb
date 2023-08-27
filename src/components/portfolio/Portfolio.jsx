import "./portfolio.css";

import IMG1 from "../../assets/my portfolio.png";
import IMG2 from "../../assets/cosmic chronicles.png";
import IMG3 from "../../assets/text formatter.png";
import IMG4 from "../../assets/invoice generator.png";
import IMG5 from "../../assets/word counter.png";
import IMG6 from "../../assets/astro foods.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "NovaWeb | Priya's Portfolio",
      img: IMG1,
      description:
        "My personal portfolio website created using ReactJS + Bootstrap, displaying my progress in the field of web development.",
      technologies: "Html | CSS | Javascript | React Js | Bootstrap",
      link: "",
      github: "",
    },
    {
      id: 2,
      title: "Cosmic Chronicles",
      img: IMG2,
      description:
        "A must visit app for astrophiles, where they can find latest astronomy news along with exciting astronomy blogs and APODs.",
      technologies: "Html | CSS | Javascript | React Js | Bootstrap | API",
      link: "https://cosmic-chronicles-priya-git21.vercel.app/",
      github: "https://github.com/Priya-git21/Cosmic-Chronicles",
    },
    {
      id: 3,
      title: "Nova Hub | Text Formatter",
      img: IMG3,
      description: "A one stop solution to format and analyze your .txt files at the very ease.",
      technologies: "Html | CSS | Javascript | React Js | Bootstrap ",
      link: "https://my-projects-black.vercel.app",
      github: "https://github.com/Priya-git21/Nova-Hub",
    },
    {
      id: 4,
      title: "Nova Hub | Invoice Generator",
      img: IMG4,
      description:
        "A dedicated, standalone web page built to generate and download invoices at its very ease. PS: In Live Demo, select project name from menu.",
      technologies: "Html | CSS | JavaScript | React Js | Bootstrap",
      link: "https://my-projects-priya-git21.vercel.app/",
      github: "https://github.com/Priya-git21/Nova-Hub",
    },
    {
      id: 5,
      title: "Word Counter",
      img: IMG5,
      description:
        "To get the dynamic background comfort at your own pace while checking out your articles on real time word counter.",
      technologies: "Html | CSS | Javascript",
      link: "https://word-counter-priya-git21.vercel.app/",
      github: "https://github.com/Priya-git21/Word-Counter",
    },
    {
      id: 6,
      title: "Astro Foods",
      img: IMG6,
      description:
        "User friendly restaurant frontend website with 5 different sections to check around.",
      technologies: "Html | CSS",
      link: "https://astro-foods.vercel.app",
      github: "https://github.com/Priya-git21/Astro-Foods",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Frontend Development Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          soloProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <hr style={{ width: "80%", margin: 'auto' }} />
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-dark"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn btn-dark"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
