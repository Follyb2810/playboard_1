import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand> <Link to='/'>Follyb</Link></Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link ><Link to='cart'>Cart</Link></Nav.Link>
          <Nav.Link ><Link to='/coming'>Coming</Link></Nav.Link>
            <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;