import React from "react";
import { mywork } from "../data";

const MyWork = () => {
  return (
    <section id="mywork" className="project-section">
      <h2 className="project-header">Some of my projects...</h2>
      <div className="project-container">
        {mywork.map((work) => {
          const { id, image, href, title } = work;
          return (
            <div key={id} className="project-tile">
              <a href={href} target="_blank">
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

export default MyWork;
