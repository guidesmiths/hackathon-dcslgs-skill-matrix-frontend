import styled from 'styled-components';
import { Icon } from '../../../../../app/commons/Icon';

const SearchBarSkillStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;
  margin-right: 80px;
  box-sizing: border-box;
`;
const SearchHomeBarSkillStyled = styled.div``;

const InputWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.poppins};
  background: white;
  margin-right: 16px;
  border-radius: 8px;
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
  padding: 0 5px;
  background-color: ${({ theme }) => theme.colors.white}
  font-size: 12px;
  border-radius: 4px;
`;

const StyledIcon = styled(Icon)`
  height: 100%;
  width: 50px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.colors.white}
`;

export { SearchBarSkillStyled, SearchHomeBarSkillStyled, InputWrapper, InputWrapperUser, StyledName, StyledIcon };
