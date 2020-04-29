import React from 'react';
import Natasha from '../../images/natasha.jpg';
import './style.css'

function About() {
    console.log("hiii")
    return (
        <div>
            <div className="page-header">
                <p className='page-title' id='about'> Hi, I'm Natasha Wolfe</p>
            </div>
            <div className="page-container">
                <div className='.img-div'>
                    <img className='about-img' src={Natasha} alt="Natasha Wolfe" />
                </div>
                <div className="text-container">
                    <p>Front-end web developer with a background in cosmetology eager to use my expertise of color theory, design, and passion of creating to build elevated user experience and technology centered websites and applications. Driven by challenging goals and creative problem solving. Enthusiastically evolving my craft of coding.</p>
                </div>
            </div>
        </div>
    )
};

export default About;