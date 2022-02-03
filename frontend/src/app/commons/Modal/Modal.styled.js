import styled from 'styled-components';

const OverlayStyled = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.2;
`;

const ModalStyled = styled.div`
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 500px;
  max-height: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export {
  ModalStyled,
  OverlayStyled,
};
