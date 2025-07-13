import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 


const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="py-3 creamtext" bg="light">
                <Container>
                   <Navbar.Brand as={Link} to="/" className="d-flex align-items-center creamtext">
    <img
        src={logo}
        alt="Logo"
        height="40"
        className="me-2"
        style={{ objectFit: 'contain' }}
    />
    Početna
</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/About" className="creamtext">
                                O meni
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Contact" className="creamtext">
                                Kontakt
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Blog" className="creamtext">
                                Novosti
                            </Nav.Link>
                            <NavDropdown title="Usluge" id="services-dropdown" className="creamtext">
                                <NavDropdown.Item as={Link} to="/zvucna_masaza">Zvučna masaža</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/kundalini_yoga">Kundalini Yoga</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/theta_healing">Theta healing</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/human_design">Human Design</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/cjenik">Cjenik</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;