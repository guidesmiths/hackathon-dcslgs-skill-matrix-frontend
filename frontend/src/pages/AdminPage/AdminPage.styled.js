import styled from 'styled-components';

const AdminPageStyled = styled.div`
display: grid;
box-sizing: border-box;
grid-template-columns: 3fr 9fr;
grid-template-rows: 200px auto;
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

const EditButton = styled.div`
  border: 0px;
  color: white;
  background-color: #10243A;
  width: 80px;
  justify-content: center;
  align-items:center;
  height:100%;
  display:${props => (props.show ? 'flex' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;
const SaveCancelButton = styled(EditButton)`
  border: 0px;
  color: #4f4f4f;
  
  &:nth-child(2){
    background-color: white;
    color: ${props => props.theme.colors.primaryColor};
  }
  &:last-child{
    background-color: ${props => props.theme.colors.primaryColor};
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

export { AdminPageStyled, IconsGroupStyled, EditButton, SaveCancelButton };
