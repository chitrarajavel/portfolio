import '../../styles/Navbar.css';
// import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="NavBar-Left-Container">
                <div className="NavBar-HomePage">Chitra R.</div>
            </div>
            <div className="NavBar-Right-Container">
                <ul>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
