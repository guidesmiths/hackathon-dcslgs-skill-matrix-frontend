import styled from 'styled-components';

const RowWrapper = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
`;
const Placeholder = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ImageHolder = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid ${props => props.theme.colors.textColor};
    border-radius: 4px;
`;
const InputHolder = styled.div`
    background-color: #EFEFEF;
    width: 300px;
    margin:0 15px;
`;

export { RowWrapper, Placeholder, ImageHolder, InputHolder };
