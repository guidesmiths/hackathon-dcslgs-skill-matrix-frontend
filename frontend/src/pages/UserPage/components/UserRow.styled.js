import styled from 'styled-components';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import Icon from '../../../app/commons/icon/icon';

const RowSkillsTop = styled.div`
  margin-bottom: ${props => (props.isRowDown ? 'none' : '8px')};
  padding: 0 15px;
  width: 80%;
  margin:0 auto;
`;
const RowSkills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  padding: 0 15px 0px 50px;
  box-sizing: border-box;
`;
const UserSkillName = styled.p`
  min-width: 100px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding-left: 5px;
`;
const StyledLabel = styled.label`
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    border:1px solid ${props => props.theme.colors.primaryColor};
    border-radius: 4px;
    &:after {
      content: '';
      width: 7px;
      height: 3px;
      position: absolute;
      top: 6px;
      left: 5px;
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
 width: 20px;
  position: relative;
  margin: 20px auto;
  
`;
const StyledCheckbox = styled.input`
  visibility: hidden;
    /* &:checked + ${StyledLabel}::after {
      opacity: 1;
    }    */
`;
const RowCollapsed = styled.div`
  margin: 0 auto;
  display: ${props => props.isCollapsed && 'none'};
  border-left: 2px solid ${props => props.theme.colors.primaryColor};
  width:80%;
  background-color:white;
`;
const RowSkillsBottom = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  padding-right: 65px;
  position: relative;
`;
const ArrowButtonStyled = styled(ArrowButton)`
  width: auto;
  background-color: transparent;
  border:0;
  padding-left: 20px;
`;
const ButtonWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
`;
const DescriptionStyled = styled.div`
    padding:0 30px;
    position: relative;
    p{
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
    }
`;

const SelectWrapper = styled.div`
    position: relative;
        height:50px;
        width:60px;
        min-width: 60px;
        margin-right: 5px;
    select {
        height:100%;
        width:100%;
        padding:10px;
        border-radius:8px;
        border: 1px solid #EFEFEF;
        box-sizing: border-box;
        font-size:16px;
        outline:none;
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
 &:first-child{
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
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    min-height: 60px;
    font-family: ${props => props.theme.fonts.poppins}; 
    padding: 0 15px;
    margin-left: 30px;
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
