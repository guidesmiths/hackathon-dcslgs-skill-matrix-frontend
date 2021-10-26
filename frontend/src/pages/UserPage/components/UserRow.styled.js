import styled from 'styled-components';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import Icon from '../../../app/commons/icon/icon';

const RowSkillsTop = styled.div`
  margin: 0 auto;
  margin-bottom: ${props => (props.isRowDown ? 'none' : '8px')};
  padding: 0 15px;
  width: 80%;
`;

const RowSkills = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px 0px 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const UserSkillName = styled.p`
  min-width: 100px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primaryColor};
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 5px;
    width: 7px;
    height: 3px;
    border: 3px solid ${props => props.theme.colors.primaryColor};
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    transform: rotate(-45deg);
  }

  &:hover:after {
    opacity: 0.5;
  };

  &:after{
    opacity: ${props => (props.isChecked ? 1 : 0)}
  }
`;

const ChecboxWrapper = styled.div`
  position: relative;
  width: 20px;
  margin: 20px 20px 20px 0;

`;

const StyledCheckbox = styled.input`
  visibility: hidden;
`;

const RowCollapsed = styled.div`
  display: ${props => props.isCollapsed && 'none'};
  width:80%;
  margin: 0 auto;
  background-color:white;
  border-left: 2px solid ${props => props.theme.colors.primaryColor};
`;

const RowSkillsBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 15px 65px 15px 15px;
`;

const ArrowButtonStyled = styled(ArrowButton)`
  width: auto;
  padding-left: 20px;
  border:0;
  background-color: transparent;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DescriptionStyled = styled.div`
  position: relative;
  padding: 0 30px;

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  height: 50px;
  width: 60px;
  min-width: 60px;
  margin-right: 5px;

  select {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #EFEFEF;
    font-size: 16px;
    outline: none;
  }
`;

const LevelEditor = styled.div`
  display:flex;
`;

const AjustLevelButtons = styled.div`
  display:flex;
`;

const AdjustButton = styled(Icon)`
  background-color: #B9E0D7;
  color: black;

  &:first-child {
    background-color: ${props => (props.clicked === 'remove' && props.clicked !== '' ? '#006B79' : props.clicked !== '' && '#EFEFEF')};
    color: ${props => (props.clicked === 'remove' && 'white')};
    border-radius: 8px 0 0 8px;
 };

  &:last-child{
    background-color: ${props => (props.clicked === 'add' ? '#006B79' : props.clicked !== '' && '#EFEFEF')};
    color: ${props => (props.clicked === 'add' && 'white')};
    border-radius: 0 8px 8px 0;
  };
`;
const StyledInput = styled.input`
  width: 100%;
  min-height: 60px;
  box-sizing: border-box;
  padding: 0 15px;
  margin-left: 30px;
  font-family: ${props => props.theme.fonts.poppins};
  border: 1px solid #EFEFEF;
  border-radius: 4px;
`;

export {
  RowSkillsTop,
  RowSkills,
  UserSkillName,
  StyledLabel,
  ChecboxWrapper,
  StyledCheckbox,
  RowCollapsed,
  RowSkillsBottom,
  ArrowButtonStyled,
  ButtonWrapper,
  DescriptionStyled,
  SelectWrapper,
  LevelEditor,
  AjustLevelButtons,
  AdjustButton,
  StyledInput,
};
