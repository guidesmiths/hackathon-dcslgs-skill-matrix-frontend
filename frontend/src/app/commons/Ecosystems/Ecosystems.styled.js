import styled from 'styled-components';
import { UserRowWrapper } from '../ScrollWrapper/ScrollWrapper.styled';

const EcosystemColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0px 0px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  font-family: ${props => props.theme.fonts.poppins};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  };

`;
const ButtonStyled = styled.button`
  padding: 8px 25px;
  font-size: 14px;
  font-weight: ${props => (props.selected === props.id ? 'bold' : '400')};
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: start;
  border: 0;
  color: ${props => (props.selected === props.id ? props.theme.colors.primaryColor : 'default')};
  background: ${props => (props.selected === props.id ? props.theme.colors.primaryColorWithOpacity : 'transparent')};
  &:hover {
    cursor: pointer;
  }
`;

const TitleColumn = styled.h4`
  padding: 20px 25px;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`;

const EcosystemScroller = styled(UserRowWrapper)`
  display: flex;
  flex-direction: column;
`;

export { EcosystemColumn, ButtonStyled, TitleColumn, EcosystemScroller };
