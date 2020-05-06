import React from 'react';
import './style.css';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/github.png';
import Resume from '../../images/resume.png';


function Contact() {
    return (
        <div className='wrapper'>
            <div className="page-header">
                <div className="page-title">Let's Connect!</div>
            </div>
            <div className="page-container">
                <div className="text-container " id='contact-text'>
                    <p className='contact-name'>Natasha Wolfe</p>
                    <a href="mailto:natasha.c.wolfe@gmail.com" target="outlook" className='contact-info-link'><p className="contact-info grow">natasha.c.wolfe@gmail.com</p></a>
                    <a href="tel:425-625-8120" className='contact-info-link'><p className="contact-info grow">(425)625-8120</p></a>
                    <div className='links'>
                    <a href='https://github.com/natashacwolfe'><img alt='GitHub' className='contact-link grow' src={GitHub} /></a>
                    <a href='https://www.linkedin.com/in/natasha-wolfe-887488194/' ><img alt='LinkedIn' className='contact-link grow' src={LinkedIn} /></a>
                    <a href='placeholder' target='_blank'><img className=" grow contact-link" alt="resume" src={Resume} /></a>       
                    </div>
                    </div>
                    </div>
        </div>
    )
};

export default Contact;