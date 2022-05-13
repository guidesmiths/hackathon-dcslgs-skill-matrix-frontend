import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border-radius: 8px;
  margin: 10px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  min-width: 110px;

  &:hover {
    cursor: pointer;
  }
`;
