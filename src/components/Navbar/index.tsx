import React from 'react';

import Container from 'components/Container';

import { NavItem, NavContainer } from './styled';

const Navbar = () => {
  return (
    <NavContainer>
      <Container flexDirection="row">
        <NavItem className="nav-brand" to="/"><span>Home</span></NavItem>
        {/* <NavItem to="/about"><span>About</span></NavItem>
        <NavItem to="/categories"><span>Categories</span></NavItem>
        <NavItem to="/tags"><span>Tags</span></NavItem> */}
        <NavItem to="/posts"><span>Posts</span></NavItem>
      </Container>
    </NavContainer>
  );
};

export default Navbar;
