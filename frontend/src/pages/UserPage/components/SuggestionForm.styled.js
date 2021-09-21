import styled from 'styled-components';


const FormStyled = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;
`;
const SelectStyled = styled.select`
  height:40px;
  width: 30%;
  margin-bottom: 30px;
  option {
    height:40px;
    border: 1px solid black;
  }
`;

const TextAreaStyled = styled.textarea`
  height: 150px;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
`;
const ButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
`;
const Buttons = styled.button`
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    
    &:hover{
      cursor: pointer;
    }
`;
export { FormStyled, SelectStyled, TextAreaStyled, ButtonWrapperStyled, Buttons };
