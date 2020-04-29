import React from 'react';
import HomeImage from '../../images/home.JPG'
import './style.css'

function Home() {
    console.log("hiii")
    return (
        <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
            <p>Natasha Wolfe</p>
        </div>
    )
};

export default Home;