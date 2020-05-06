import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar({ setPage }) {

    return (
        <nav className='nav'>
            <ul className="nav-links">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/projects'>Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;
