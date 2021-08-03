import React, { Fragment } from 'react';
import { NavBarTop, NavBarLink } from './NavBar.styled';

const NavBar = () => (
  <Fragment>
    <NavBarTop>
      <NavBarLink to="/">Directory</NavBarLink>
      <NavBarLink to="/profile">Personal Skill Matrix</NavBarLink>
    </NavBarTop>
  </Fragment>
);

export default NavBar;
