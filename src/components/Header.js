import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" >
  <Container>
    <Navbar.Brand href="/">Aston Jeremiah's</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/Login">Sign in</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
