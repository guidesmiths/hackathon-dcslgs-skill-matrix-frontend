import styled from 'styled-components';

const EcosystemColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 100vh;
`;
const ButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 15px 20px;
  text-align: left;
  &:hover {
    background-color: #8fd9a3;
    font-weight: 600;
  }
`;
const TitleColumn = styled.h4`
  padding: 15px 20px;
  border-bottom: 1px solid black;
  margin: 0;
`;

export { EcosystemColumn, ButtonStyled, TitleColumn };
