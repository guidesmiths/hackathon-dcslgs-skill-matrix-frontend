import styled, { keyframes } from 'styled-components';
import WaveImage from '../../../Assets/Images/wave.png';

const animate = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 5000px;
  }
`;

const animate2 = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -5000px;
  }
`;

const WaveComponent = styled.div`
  position: fixed;
  bottom: 0;
  width: 150%;
  height: 100px;
`;

const WaveWrapper = styled.div`
  position: relative;
  width: 150%;
  height:100px;
`;

const Wave = styled.div`
  bottom: ${({ bottom }) => bottom}px;
  animation: ${props => (props.animation ? (animate) : (animate2))} ${props => props.speed}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  opacity: ${({ opacity }) => opacity};
  z-index: ${({ zIndex }) => zIndex};
  position: absolute;
  left: -10px;
  background-image: url(${WaveImage});
  height: 100%;
  width: 100%;
  background-size: 5000px 100px;
  overflow: hidden;
`;

export { WaveComponent, WaveWrapper, Wave };
