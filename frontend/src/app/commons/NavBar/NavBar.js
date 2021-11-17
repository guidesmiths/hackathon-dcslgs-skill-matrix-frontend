import React from 'react';
import { useSelector } from 'react-redux';
import { NavBarTop, NavStyled, NavBarLink, LogoWrapper, UserWrapperStyled, StyledIcon } from './NavBar.styled';
import logo from '../../../Assets/Images/Logo_DCSLGuideSmiths.webp';
import logout from '../../../Assets/Icons/logout.svg';
import LazyImage from '../LazyImage/LazyImage';
import { selectUserData } from '../../../redux/user/userSlice';

const NavBar = () => {
  const userData = useSelector(selectUserData);
  const signOut = () => {
    localStorage.clear();
  };
  return (
    <NavBarTop>
      <NavStyled>
        <LogoWrapper>
          <LazyImage actualSrc={logo}/>
          <NavBarLink exact activeClassName="selected" to="/admin">Directory</NavBarLink>
        </LogoWrapper>
        <NavBarLink exact activeClassName="selected" to="/">Skill Matrix</NavBarLink>
        <NavBarLink exact activeClassName="selected" to="/profile">Personal Skill Matrix</NavBarLink>
      </NavStyled>
      <UserWrapperStyled>
        <StyledIcon icon={'face'} />
        <NavBarLink activeClassName="selected" to="/profile">{userData?.email}</NavBarLink>
        <NavBarLink activeClassName="selected" to="/login" onClick={signOut} >
          <LazyImage actualSrc={logout} />
        </NavBarLink>
      </UserWrapperStyled>
    </NavBarTop>
  );
};

export default NavBar;
