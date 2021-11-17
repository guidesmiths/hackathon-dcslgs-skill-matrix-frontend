import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 998;
  background: black;
  opacity: 0.2;
`;

const ModalStyled = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-height: 100%;
  background: ${props => props.theme.colors.white};
  box-sizing: border-box;
  z-index: 999;
`;

export {
  ModalStyled,
  OverlayStyled,
};
