import styled from 'styled-components';

const AdminPageStyled = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 3fr 9fr;
  grid-template-rows:  ${props => (props.noSuggestions ? ' 50px auto' : ' 200px auto')};
  grid-template-areas:
    "suggestions suggestions"
    "ecosystems-sidebar ecosystems-main";
  height: 100vh;
  font-family: ${props => props.theme.fonts.poppins};
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

export { AdminPageStyled, IconsGroupStyled, EditButton, SaveCancelButton };
