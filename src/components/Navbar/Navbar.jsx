import React from 'react';
import Search from '../Search/Search';
import All from '../All/All';
import MoreValued from '../MoreValue/MoreValue';
import LessValued from '../LessValued/LessValued';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarBM = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src='https://i.imgur.com/RJQjzuf.png'
            width='106,81'
            height='64'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link to='/'>
            <All />
          </Nav.Link>
          <Nav.Link to='/'>
            <MoreValued />
          </Nav.Link>
          <Nav.Link to='/'>
            <LessValued />
          </Nav.Link>
          <Nav.Link to='/'>
            <Search />
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle
              variant='dark'
              id='dropdown-basic'
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/form'>Añadir película</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarBM;
