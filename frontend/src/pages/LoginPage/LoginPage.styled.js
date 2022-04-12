import styled from 'styled-components';

const LoginStyled = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

const LoginTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primaryColor};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 64px;
  line-height: 72px;
`;

const LoginButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled.img`
  margin-right: 10px;
`;

const StyledText = styled.p`
  max-width: 300px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
`;

export { LoginStyled, LoginTitle, LoginButtonStyled, StyledIcon, StyledText };
