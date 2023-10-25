import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNavegacao() {
  return (
    <Navbar style={{backgroundColor:"#F8F0E5"}} fixed='top' expand="lg" >
      <Container>
        <Navbar.Brand style={{color: "#102C57"}} href="/">Página Principal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{color: "#102C57"}} href="/PresenteEsperado">Presentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacao;