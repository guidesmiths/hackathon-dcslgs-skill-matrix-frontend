import styled from 'styled-components';

const InputStyled = styled.input`
  border: 0;
  outline: none;
  border-radius: 5px;
  height: 48px;
  width: ${props => `${props.width}px`};
  padding-left: 15px;
  margin-right: 10px;
`;

export default InputStyled;
