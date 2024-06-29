import React from 'react';
import { Navbar, Nav,  Container } from 'react-bootstrap';

// const Navigation = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About Me</Link></li>
//                 <li><Link to="/education">Education</Link></li>
//                 <li><Link to="/research">Research</Link></li>
//                 <li><Link to="/publications">Publications</Link></li>
//                 <li><Link to="/projects">Projects</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     );
// };

const Navigation = () => {
    return (
        <Navbar className='nav-bar' expand="lg">
            <Container className='nav-container'>
                <Navbar.Brand href="#home">EnshenZhu Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-list me-auto">
                        <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-item" href="#about">About Me</Nav.Link>
                        <Nav.Link className="nav-item" href="#education">Education</Nav.Link>
                        <Nav.Link className="nav-item" href="#research">Research</Nav.Link>
                        <Nav.Link className="nav-item" href="#publications">Publications</Nav.Link>
                        <Nav.Link className="nav-item" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="nav-item" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;