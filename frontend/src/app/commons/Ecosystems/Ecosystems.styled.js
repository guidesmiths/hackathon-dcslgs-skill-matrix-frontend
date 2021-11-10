import styled from 'styled-components';
import { UserRowWrapper } from '../ScrollWrapper/ScrollWrapper.styled';

const EcosystemColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  min-height: 70vh;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0px 0px 50px;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  font-family: ${props => props.theme.fonts.poppins};
  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  };

`;
const ButtonStyled = styled.button`
  padding: 8px 25px;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 24px;
  border: 0;
  background: transparent;
  text-align: start;

  &:last-child{
    padding-bottom: 20px;
  }

  &:hover {
    background: #f4f4f4;
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
