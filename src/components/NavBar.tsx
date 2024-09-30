import { Navbar, Nav, Container } from "react-bootstrap";
import { useMatch } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">Synonym Tool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/get" active={Boolean(useMatch("/get"))}>
              Get
            </Nav.Link>
            <Nav.Link href="/add" active={Boolean(useMatch("/add"))}>
              Add
            </Nav.Link>
            <Nav.Link href="/edit" active={Boolean(useMatch("/edit"))}>
              Edit
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
