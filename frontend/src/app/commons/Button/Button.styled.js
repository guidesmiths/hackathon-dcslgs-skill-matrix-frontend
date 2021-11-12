import styled from 'styled-components';

const ButtonStyled = styled.button`
  border-radius: 8px;
  margin: 10px;
  background-color: ${props => props.theme.colors.primaryColor};
  font-family: ${props => props.theme.fonts.poppins};
  color: white;
  border: none;
  padding: 15px 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  min-width: 110px;

  &:hover{
    cursor: pointer;
  }
`;

export default ButtonStyled;
