import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from '../icon/icon';

const NavBarTop = styled.div`
  height: 72px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.white};
`;

const NavStyled = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin: 0 45px;
  border-right: 1px solid #E5E5E5;
  display: flex;
  align-items: center;
  height: 100%;
`;

const LogoPlaceHolder = styled.div`
  min-height: 100%;
  min-width: 20px;
`;

const UserWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavBarLink = styled(NavLink)`
  color: black;
  font-weight: 500;
  font-size: 12px;
  font-family: ${params => params.theme.fonts.poppins};
  text-decoration: none;
  padding: 5px 7px;
  border-radius: 8px;

  &:hover {
    color: grey;
  };

  &.${props => props.activeClassName}{
    font-weight:  900;
  }
`;

const Image = styled.img`
  margin-right: 18px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  border: none;
`;

export { NavBarTop, NavStyled, NavBarLink, LogoWrapper, LogoPlaceHolder, UserWrapperStyled, StyledIcon, Image };
