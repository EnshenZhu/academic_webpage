import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;