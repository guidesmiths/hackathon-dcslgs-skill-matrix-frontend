import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavBarTop, NavStyled, NavBarLink, LogoWrapper, UserWrapperStyled, StyledIcon } from './NavBar.styled';
import logo from '../../../Assets/Images/Logo_DCSLGuideSmiths.webp';
import LazyImage from '../LazyImage/LazyImage';
import { selectUserData } from '../../../redux/user/userSlice';

const NavBar = () => {
  const userData = useSelector(selectUserData);
  return (
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
          <NavBarLink activeClassName="selected" to="/profile">{userData.email}</NavBarLink>
        </UserWrapperStyled>
      </NavBarTop>
    </Fragment>
  );
};

export default NavBar;
