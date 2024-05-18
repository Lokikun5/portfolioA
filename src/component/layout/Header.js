
import mylogo from '../../img/logo.webp'
//import {Link } from "react-router-dom";
import '../../style/header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header () {

    return(
        <header>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="logo-img rounded-circle" src={mylogo} alt="mon logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#profil">Profil</Nav.Link>
                            <Nav.Link href="/#dataSkills">Compétences</Nav.Link>
                            <Nav.Link href="/#project">Projet et Expérience</Nav.Link>
                            <Nav.Link href="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
export default Header;