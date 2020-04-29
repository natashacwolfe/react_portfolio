import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className='nav'>
        <div className="navbar">     
            <ul className="nav-links">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to='/projects'>Projects</Link></li>
                <li className="nav-item"><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </nav>
    )
};

export default Navbar;