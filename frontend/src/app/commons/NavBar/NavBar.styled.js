import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBarTop = styled.div`
  background-color: grey;
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const NavBarLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-family: Arial;
  text-decoration: none;
  padding: 5px 7px;
  border-radius: 8px;
  &:hover {
    color: grey;
    background: white;
  }
`;

export { NavBarTop, NavBarLink };
