import styled from 'styled-components';

const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
  margin: 0 20px;
`;

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-transition: .4s;
  transition: .4s;
  background: ${({ theme }) => theme.colors.grey3};
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 100px;

  &:before {
    content: "";
    position: absolute;
    left: 1px;
    bottom: 0;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.grey2};
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchSlider}:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export { SwitchButton, SwitchInput, SwitchSlider };
