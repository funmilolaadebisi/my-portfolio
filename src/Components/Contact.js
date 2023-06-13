import React from "react";
import { socials } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Interested in hiring me? I'm always open to discussing opportunities</h2>
        <p>Kindly contact me on</p>
      </div>
      <ul className="social-icons">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id} className="contact-details">
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contact;
