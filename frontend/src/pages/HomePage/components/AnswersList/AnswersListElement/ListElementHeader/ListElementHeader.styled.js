import styled from 'styled-components';

const UserNameStyled = styled.h3`
    margin: 0px;
    padding: 0px;
`;

const UserEmailStyled = styled.h5`
    margin: 0px;
    padding: 0px;
`;

const UserRolStyled = styled.p`
    margin: 0px;
    padding: 10px 10px;
    border: 1px solid #bbb;
    background: #fafafa;
    border-radius: 10%;
`;

const ListElementStyled = styled.div`
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    background: #f4f4f4;
`;

export { ListElementStyled, UserNameStyled, UserEmailStyled, UserRolStyled };
