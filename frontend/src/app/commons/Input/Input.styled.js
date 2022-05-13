import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 0;
  outline: none;
  border-radius: 5px;
  height: 48px;
  width: ${({ width }) => `${width}px`};
  padding-left: 15px;
  margin-right: 10px;
`;
