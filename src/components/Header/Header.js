import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logout}=useAuth()
  const logOut=()=>{
    logout()
  }
    return (
        <div className="mb-5">
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={NavLink}  to="/home">
    <img
          alt=""
          src="https://i.ibb.co/QC4NZZY/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Test Plus</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/service">Services</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        {
          user.displayName && <Nav.Link disabled className="text-white">{user.displayName}</Nav.Link>
        }
        {
          user?<Button  onClick={logOut} variant="warning">LogOut</Button>
          :<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;