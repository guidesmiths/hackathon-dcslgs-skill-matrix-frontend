import styled from 'styled-components';

const InputStyled = styled.input`
  border:0px;
  outline: none;
  border-radius: 5px;
  height: 48px;
  width: ${props => `${props.width}px`};
  padding: 0 15px;
  margin-right: 20px;
`;

export default InputStyled;
