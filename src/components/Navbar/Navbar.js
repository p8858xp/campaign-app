import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  padding: 1em 1.5em;
  background-color: #001276;
  color: #fff;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <header>
        <Link to="/">My Campaigns</Link>
      </header>
    </StyledNav>
  );
};

export default Navbar;
