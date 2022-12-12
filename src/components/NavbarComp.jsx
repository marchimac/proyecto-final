import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cálculo de la Tasa Metabólica Basal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" data-testid='tested' >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/recetas">Recetas</Nav.Link>
            <Nav.Link href="/informacion">Enlaces</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

