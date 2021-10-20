import styled, { keyframes } from 'styled-components';
import Icon from '../../../../app/commons/icon/icon';

const animation2 = keyframes`
    0% {
      opacity:0.1
    }
    25%{
      opacity:0.3;
    }
    50%{
      opacity:0.5;
    }
    75%{
      opacity:0.8;
    }
    100%{
      opacity:1;
    }
`;

const SearchBarsWrapper = styled.div`
    padding: 20px 0 60px;
    animation: ${animation2} 4s;
    position: relative;
    box-sizing:border-box;
`;

const SearchBarWrapper = styled.div`
    position: relative;
    height: 56px;
    width: 95%;
    margin: 15px auto;
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

export { SearchBarUsers, SearchBarsWrapper, IconStyled, SearchBarWrapper, SearchBarSkillWrapper };
