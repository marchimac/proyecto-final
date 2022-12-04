import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComp() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  className='m-auto'>Calculadora de la Tasa Metabólica Basal</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComp;