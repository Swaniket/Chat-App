import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNav() {
  const [loggedInUserName, setLoggedInUserName] = useState("Swaniket");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>Chat App</Navbar.Brand>
        </Link>

        <Nav>
          <Link to="/login" className="text-decoration-none">
            <a className="nav-link">Login</a>
          </Link>
          <Link to="/register" className="text-decoration-none">
            <a className="nav-link">Register</a>
          </Link>

          <NavDropdown title={loggedInUserName}>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
