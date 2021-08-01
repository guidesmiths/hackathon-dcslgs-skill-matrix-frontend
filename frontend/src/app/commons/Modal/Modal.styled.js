import styled from 'styled-components';

const OverlayStyled = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: black;
    opacity: 0.2;
`;

const ModalStyled = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    max-width: 100%;
    height: 300px;
    max-height: 100%;
    border: 1px solid #bbb;
    background: #f4f4f4;
    box-sizing: border-box;
    z-index: 2;
`;

export {
  ModalStyled,
  OverlayStyled,
};
