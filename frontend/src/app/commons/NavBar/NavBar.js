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
          <NavBarLink exact activeClassName="selected" to="/">Directory</NavBarLink>
        </LogoWrapper>
        <NavBarLink exact activeClassName="selected" to="/">Skill Matrix</NavBarLink>
        <NavBarLink exact activeClassName="selected" to="/profile">Personal Skill Matrix</NavBarLink>
      </NavStyled>
      <UserWrapperStyled>
        <StyledIcon icon={'face'} />
        <NavBarLink activeClassName="selected" to="/profile">test@email.com</NavBarLink>
      </UserWrapperStyled>
    </NavBarTop>
  </Fragment>
);

export default NavBar;
