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
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
  background: #EFEFEF;
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 100px;

  &:before {
    position: absolute;
    border-radius: 50%;
    content: "";
    height: 14px;
    width: 14px;
    left: 1px;
    bottom: 0px;
    background: #CCCCCC;
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked {
    background-color: #2196F3;
  }

  &:checked + ${SwitchSlider}:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
    background-color: ${props => props.theme.colors.primaryColor};
  }

  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px #2196F3;
  }
`;

export { SwitchButton, SwitchInput, SwitchSlider };
