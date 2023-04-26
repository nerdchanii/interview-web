import Logo from '@/components/atoms/Logo';
import React from 'react';
import Nav from '@/components/atoms/Nav';
import { Box } from '@chakra-ui/react';
import Container from './Container';

const NavBar = () => {
  return (
    <Container>
      <Logo />
      <Nav.Container>
        <Nav.NavItem href='/'>Home</Nav.NavItem>
        <Nav.NavItem href='/about'>About</Nav.NavItem>
      </Nav.Container>
    </Container>
  );
};

export default NavBar;
