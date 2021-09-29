import React, { Fragment } from 'react';
import { NavBarTop, NavStyled, NavBarLink, LogoWrapper, UserWrapperStyled, StyledIcon } from './NavBar.styled';
import logo from '../../../Assets/Images/Logo_DCSLGuideSmiths.webp';
import LazyImage from '../LazyImage/LazyImage';

const NavBar = () => (
  <Fragment>
    <NavBarTop>
      <NavStyled>
        <LogoWrapper>
          <LazyImage actualSrc={logo}/>
          <NavBarLink to="/" exact activeClassName="selected">Directory</NavBarLink>
        </LogoWrapper>
        <NavBarLink to="/profile" activeClassName="selected">Skill Matrix</NavBarLink>
        <NavBarLink to="/" activeClassName="selected">Personal Skill Matrix</NavBarLink>
      </NavStyled>
      <UserWrapperStyled>
        <StyledIcon icon={'face'} />
        <NavBarLink to="/profile" activeClassName="selected">test@email.com</NavBarLink>
      </UserWrapperStyled>
    </NavBarTop>
  </Fragment>
);

export default NavBar;

