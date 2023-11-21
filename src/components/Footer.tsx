import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Footer() {
    return <NavbarBs fixed="bottom" className="bg-white shadow-sm">
        <Container>
            <Nav className="me-auto">
                <a
                    href="https://github.com/muryllohenriq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ marginRight: '10px' }}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/muryllohenrique/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                >
                    Linkedin
                </a>
            </Nav>
        </Container>
    </NavbarBs>
}