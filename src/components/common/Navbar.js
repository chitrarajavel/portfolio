import '../../styles/Navbar.css';
// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom/client';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="NavBar-Left-Container">
                <div className="NavBar-HomePage">CR Porfolio </div>
            </div>
            <div className="NavBar-Right-Container">
                <ul>
                    <li>Skills</li>
                    <li>Courses</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
