import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>MyPortfolio</Logo>
      <Menu>
        <MenuItem><StyledLink to="/">Home</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/about">About</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/projects">Projects</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/contact">Contact</StyledLink></MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-left: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
