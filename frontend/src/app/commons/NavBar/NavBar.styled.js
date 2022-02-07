import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from '../icon/icon';

const NavBarTop = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
`;

const NavStyled = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin: 0 45px;
  border-right: 1px solid ${({ theme }) => theme.colors.grey3};
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
  padding: 5px 7px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.grey1};
  };

  &.${({ activeClassName }) => activeClassName}{
    font-weight: 900;
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
