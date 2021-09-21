import React, { Fragment } from 'react';
import { NavBarTop, NavStyled, NavBarLink, LogoWrapper, UserWrapperStyled, StyledIcon } from './NavBar.styled';
import logo from '../../../Assets/Images/Logo_DCSLGuideSmiths.png';

const NavBar = () => (
  <Fragment>
    <NavBarTop>
      <NavStyled>
        <LogoWrapper>
          <img src={logo}/>
          <NavBarLink to="/" activeClassName="selected">Directory</NavBarLink>
        </LogoWrapper>
        <NavBarLink to="/profile" activeClassName="selected">Skill Matrix</NavBarLink>
        <NavBarLink to="/404">Personal Skill Matrix</NavBarLink>
      </NavStyled>
      <UserWrapperStyled>
        <StyledIcon icon={'face'} />
        <NavBarLink to="/" activeClassName="selected">test@email.com</NavBarLink>
      </UserWrapperStyled>
    </NavBarTop>
  </Fragment>
);

export default NavBar;

