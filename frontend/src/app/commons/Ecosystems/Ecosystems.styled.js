import styled from 'styled-components';
import { UserRowWrapper } from '../ScrollWrapper/ScrollWrapper.styled';

const EcosystemColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 0 50px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  font-family: ${props => props.theme.fonts.poppins};
`;

const ButtonStyled = styled.button`
  padding: 8px 25px;
  font-size: 14px;
  font-weight: ${props => (props.selected ? 'bold' : '400')};
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: start;
  border: 0;
  color: ${props => (props.selected ? props.theme.colors.primaryColor : 'default')};
  background: ${props => (props.selected ? props.theme.colors.primaryColorWithOpacity : 'transparent')};
  &:last-child {
    padding-bottom: 20px;
  }

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
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.primaryColor} transparent;

  &::-webkit-scrollbar {
    display: block !important;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primaryColor};
    width: 4px;
    max-height: 178px;
    border-radius: 8px;
  }
`;

export { EcosystemColumn, ButtonStyled, TitleColumn, EcosystemScroller };
