import styled from 'styled-components';

const UserNameStyled = styled.p`
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const SubjectStyled = styled.p`
    margin-top: 5px;
    padding: 0px;
    width: 100%;
`;

const SuggestionCardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 5px;
    border: 1px solid #bbb;
    padding: 10px;
    color: #333;
    background: #f4f4f4;
    height: 100px;
    width: 150px;
    box-sizing: border-box;
`;

const IconsContainerStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export { SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled };
