import styled from 'styled-components';

const AdminPageStyled = styled.div`
   position: relative;
  display: block;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.poppins};
`;

const EcosystemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -40px;
  padding-bottom: 70px;
`;

const IconsGroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  border: 0;
  color: white;
  background-color: #10243A;
  width: 112px;
  justify-content: center;
  align-items:center;
  height:100%;
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 16px;
  display:${props => (props.show ? 'flex' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;

const SaveCancelButton = styled(EditButton)`
  border: 0;
  color: #4f4f4f;
  background-color:  ${props => (props.save ? props.theme.colors.primaryColor : 'white')};
  color: ${props => (props.save ? 'white' : props.theme.colors.primaryColor)};

  &:hover {
    cursor: pointer;
  }
`;

export { AdminPageStyled, IconsGroupStyled, EcosystemsContainer, EditButton, SaveCancelButton };
