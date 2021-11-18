import styled from 'styled-components';
import Icon from '../../../../../app/commons/icon/icon';

const SearchBarSkillStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
`;

const InputWrapper = styled.div`
  position: relative;
  font-family: ${props => props.theme.fonts.poppins};
`;

const InputWrapperUser = styled(InputWrapper)`
  width: 100%;
  height: 56px;
  input {
    width: 100% !important;
    height: 100% !important;
    box-sizing: border-box;
    padding: 0 40px !important;
  };
`;

const StyledName = styled.p`
  position: absolute;
  top: -12px;
  left: 20px;
  margin: 0;
  background-color: white;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 4px;
`;

const StyledIcon = styled(Icon)`
  background-color: white;
  height: 100%;
  width: 50px;
  margin-right: 10px;
`;

export { SearchBarSkillStyled, InputWrapper, InputWrapperUser, StyledName, StyledIcon };
