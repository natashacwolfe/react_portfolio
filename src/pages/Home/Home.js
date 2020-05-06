import React from 'react';
import './style.css';
import NatashaText from '../../images/home-text.png';
import { Link } from 'react-router-dom';


function Home() {
    console.log("hiii")
    return (
        <div className="home">
                <img src={NatashaText} title='Click here to learn more!' className='intro' alt="Hii! I'm Natasha!" />
        </div>
    )
};

export default Home;