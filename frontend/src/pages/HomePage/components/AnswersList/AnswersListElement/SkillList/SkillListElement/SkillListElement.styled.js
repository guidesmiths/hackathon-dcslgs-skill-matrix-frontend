import styled from 'styled-components';

const SkillNameStyled = styled.h3`
    font-size: 12px;
    line-height: 20px;
    margin-right: 20px;
    width: 100px;
`;

const SkillLevelStyled = styled.p`
    background: ${props => props.theme.colors.lightGreen};
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 20px;
    margin-right: 20px;
`;
const DescriptionStyled = styled.p`
    font-size: 12px;
    line-height: 20px;
`;

const SkillElementStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 50px;
    border: 1px solid #ddd;
    border-top: none;
    &:hover {
        background: #fafafa;
    }
`;

export { SkillNameStyled, SkillLevelStyled, SkillElementStyled, DescriptionStyled };
