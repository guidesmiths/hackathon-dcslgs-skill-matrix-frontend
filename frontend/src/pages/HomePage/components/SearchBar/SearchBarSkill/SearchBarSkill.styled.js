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

export { SearchBarSkillStyled, InputWrapper, StyledName, StyledIcon };
