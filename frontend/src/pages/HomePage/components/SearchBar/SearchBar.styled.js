import styled, { keyframes } from 'styled-components';
import { Icon } from '../../../../app/commons/Icon';

const animation2 = keyframes`
  0% {
    opacity: 0.1
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const SearchBarsWrapper = styled.div`
  position: relative;
  padding: 20px 0 60px;
  animation: ${animation2} 4s;
  box-sizing:border-box;
`;
const SearchBarsUserWrapper = styled(SearchBarsWrapper)`
  margin: 0 auto;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  height: 56px;
  width: 95%;
  margin: 15px auto;
`;
const HomeSearchBarWrapper = styled.div`
  position: relative;
  height: 56px;
  width: 95%;
  margin: 15px auto 25px;
`;

const SearchBarSkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 10px auto;
`;

const SearchBarUsers = styled.input`
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 45px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
`;

const IconStyled = styled(Icon)`
    position: absolute;
    transform: rotate(90deg);
    width: 14px;
    height: 14px;
    top: 0;
    bottom: 0;
    left: 15px;
    margin: auto;
`;

export { SearchBarUsers, HomeSearchBarWrapper, SearchBarsWrapper, SearchBarsUserWrapper, IconStyled, SearchBarWrapper, SearchBarSkillWrapper };
