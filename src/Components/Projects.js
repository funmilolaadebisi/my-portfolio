import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h2 className="project-header">My Recent Work...</h2>
      <div className="project-container">
        {projects.map((project) => {
          const { id, image, url, title } = project;
          return (
            <div key={id} className="project-tile">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={image} alt={title} className="photo" />
                <div className="project-title">
                  <header>
                    <h4>{title}</h4>
                  </header>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
