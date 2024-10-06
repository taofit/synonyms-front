import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, useMatch } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/synonyms-front/">Synonym Tool</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/synonyms-front/get"
                active={Boolean(useMatch("/synonyms-front/get"))}
              >
                Get
              </Nav.Link>
              <Nav.Link
                href="/synonyms-front/add"
                active={Boolean(useMatch("/synonyms-front/add"))}
              >
                Add
              </Nav.Link>
              <Nav.Link
                href="/synonyms-front/edit"
                active={Boolean(useMatch("/synonyms-front/edit"))}
              >
                Edit
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
