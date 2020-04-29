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
                <p>I'm a full stack web developer living in the beautiful Pacific Northwest.
                
                Inspired by nature. When I am not coding, you can find me adventuring outside. </p>
                <p>
                From my past life as a hairstylist, I am eager to use my expertise of color theory, 
                design, and passion of creating to build elevated user experience and technology centered websites and
                applications. Driven by challenging goals and creative problem solving. Enthusiastically evolving my craft of coding.
                </p>   
                </div>
            </div>
        </div>
    )
};

export default About;