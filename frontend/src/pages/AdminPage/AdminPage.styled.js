import styled from 'styled-components';

const AdminPageStyled = styled.div`
  position: relative;
  padding-top: 72px;
  display: block;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.poppins};
  overflow-y: auto;
  height: 100vh;
`;

const EcosystemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -40px;
  padding-bottom: 85px;
`;

const IconsGroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 16px;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

const SaveCancelButton = styled(EditButton)`
  border: 0;
  background-color: ${({ save, theme }) => (save ? theme.colors.primaryColor : theme.colors.white)};
  color: ${({ save, theme }) => (save ? theme.colors.white : theme.colors.primaryColor)};

  &:hover {
    cursor: pointer;
  }
`;

export { AdminPageStyled, IconsGroupStyled, EcosystemsContainer, EditButton, SaveCancelButton };
