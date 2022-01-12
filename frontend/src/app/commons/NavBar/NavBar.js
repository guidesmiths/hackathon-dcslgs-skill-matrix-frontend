import React from 'react';
import PropTypes from 'prop-types';
import { useTour } from '@reactour/tour';
import logo from '../../../Assets/Images/Logo_DCSLGuideSmiths.webp';
import logout from '../../../Assets/Icons/logout.svg';
import info from '../../../Assets/Icons/info.svg';
import { NavBarTop, NavStyled, NavBarLink, LogoWrapper, UserWrapperStyled, StyledIcon, Image } from './NavBar.styled';
import LazyImage from '../LazyImage/LazyImage';
import SwitchTest from '../SwitchTest/SwitchTest';
import EnvironmentComponent from '../EnvComponent/EnvComponent';

const NavBar = ({ userData, userView, handleChangeRoleView }) => {
  const signOut = () => {
    localStorage.clear();
  };

  const { setIsOpen } = useTour();

  return (
    <NavBarTop>
      <NavStyled>
        <LogoWrapper>
          <LazyImage actualSrc={logo}/>
          {userData && <NavBarLink exact activeClassName="selected" to="/directory">Directory</NavBarLink>}
        </LogoWrapper>
        {userData && <NavBarLink activeClassName="selected" to={!userView ? '/ecosystem' : '/profile/ecosystem'}>Skill Matrix</NavBarLink>}
        {!userView && userData && <NavBarLink activeClassName="selected" to="/profile">Personal Skill Matrix</NavBarLink>}
      </NavStyled>
      <EnvironmentComponent excludedEnvironments={['production']}>
        <div style={{ display: 'flex', alignItems: 'center', padding: 5, borderRadius: 10, fontFamily: 'Poppins', fontSize: 12 }}>
          Admin<SwitchTest checked={userView} handleChange={handleChangeRoleView} />User
        </div>
      </EnvironmentComponent>
      <UserWrapperStyled>
        <Image src={info} onClick={() => setIsOpen(true)} />
        <StyledIcon icon={'face'} />
        <NavBarLink to={!userView ? '/profile' : '/profile/ecosystem'}>{userData?.email}</NavBarLink>
        <NavBarLink activeClassName="selected" to="/login" onClick={signOut} >
          <LazyImage actualSrc={logout} />
        </NavBarLink>
      </UserWrapperStyled>
    </NavBarTop>
  );
};

NavBar.propTypes = {
  handleChangeRoleView: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  userView: PropTypes.bool.isRequired,
};

export default NavBar;
