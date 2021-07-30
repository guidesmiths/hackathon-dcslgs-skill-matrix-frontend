import styled from 'styled-components';

import Modal from '../../../../../../app/commons/Modal/Modal';
import Button from '../../../../../../app/commons/Button/Button';

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: left;
    padding: 40px 50px;
    box-sizing: border-box;
    background: #f4f4f4;
    border-radius: 10px;
`;

const UserNameStyled = styled.div`
    font-weight: bold;
`;

const SuggestionStyled = styled.div`
    padding: 25px 10px;

`;

const DescriptionStyled = styled.div`
    padding: 10px 10px;
`;

const ButtonsGroups = styled.div`
    display: flex;
    justify-content: center;
`;

const ButtonStyled = styled(Button)`
    padding: 15px;
    margin: 20px 10px;
    border: 0px;
    background: #f4f4f4;

    &:hover {
        background: #e4e4e4;
        border-radius: 5px;
      }
`;

const SuggestionModalStyled = styled(Modal)`
    border-radius: 10px;
`;

export {
  ModalContent,
  UserNameStyled,
  ButtonsGroups,
  ButtonStyled,
  SuggestionStyled,
  DescriptionStyled,
  SuggestionModalStyled,
};
