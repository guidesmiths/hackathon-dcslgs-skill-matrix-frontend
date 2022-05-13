import styled from 'styled-components';

const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1140px) {
    height: 80px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
`;

const RadioButton = styled.input`
  z-index: 99;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  opacity: 0;
  cursor: pointer;

  &:hover ~ ${RadioButtonLabel} {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    &::after {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      margin: 6px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 50%;
    }
  }

  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }

  &:checked + ${RadioButtonLabel} {
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    &::after {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      margin: 6px;
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

const Image = styled.img`
  width: 24px;
`;

export { Country, Item, Label, Image, RadioButton, RadioButtonLabel };
