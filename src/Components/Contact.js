import React from 'react'
import { socials } from '../data'

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
        <div className='contact-section-header'>
            <h2>Interested in working with me? Let's have a chat...</h2>
            <p>You can find me on</p>
        </div>
        <ul className='social-icons'>
            {socials.map((social) => {
                const { id, url, icon } = social;
                return (
                    <li key={id} className='contact-details'>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    </section>
  );
}

export default Contact