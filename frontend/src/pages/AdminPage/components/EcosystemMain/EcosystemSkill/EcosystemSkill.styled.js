import styled from 'styled-components';

import Icon from '../../../../../app/commons/icon/icon';

const SkillContainerStyled = styled.div`
  border: 1px solid #aaa;
  box-sizing: border-box;
  margin: 20px;
`;

const SkillHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 10px;
`;

const SkillNameInputStyled = styled.input`
    padding: 10px;
`;

const IconsGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0px 20px;
`;

const IconStyled = styled(Icon)`
    border: 0px;
    width: 20px;
    height: 20px;
    color: #4f4f4f;

    &:hover {
        color: black;
        cursor: pointer;
      }
`;

const LevelContainerStyled = styled.div`
    display: ${props => (props.show ? 'flex' : 'none')};
    align-items: center;
    border-top: 1px solid #aaa;
    padding: 10px;
`;

const LevelStyled = styled.textarea`
    resize: none;
    width: 100%;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;

export {
  SkillContainerStyled,
  SkillHeaderStyled,
  SkillNameInputStyled,
  IconsGroupStyled,
  IconStyled,
  LevelContainerStyled,
  LevelStyled,
};
