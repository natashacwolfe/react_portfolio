import React from 'react';
import './style.css';
import NatashaText from '../../images/home-text.png';


function Home() {
    console.log("hiii")
    return (
        <div className="home">
                <img src={NatashaText} className='intro' alt="Hii! I'm Natasha!" />
        </div>
    )
};

export default Home;