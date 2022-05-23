import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 10px;
`;

const RadioButtonMarker = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
`;

const RadioButton = styled.input`
  z-index: 99;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    margin: 6px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: 1px solid ${({ theme }) => theme.colors.grey2};
    border-radius: 50%;
  }

  &:hover ~ ${RadioButtonMarker} {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      margin: 5px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 50%;
    }
  }

  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }

  &:checked + ${RadioButtonMarker} {
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      margin: 5px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 50%;
    }
  }
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 16px;
  margin: 0 6px;
`;

export { Item, Label, RadioButtonMarker, RadioButton };
