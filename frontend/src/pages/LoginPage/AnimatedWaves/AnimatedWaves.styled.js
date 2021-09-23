import styled, { keyframes } from 'styled-components';
import WaveImage from '../../../Assets/Images/wave.png';

const animate = keyframes`
0% {
background-position-x: 0;
}
100%{
 background-position-x: 5000px;
}
`;
const animate2 = keyframes`
0% {
background-position-x: 0;
}
100%{
 background-position-x: -5000px;
}
`;


const Wave = styled.div`
position: fixed;
bottom: 0;
width: 150%;
height:100px;
`;
const WaveWrapper = styled.div`
position: relative;
width: 150%;
height:100px;
`;
const WaveOne = styled.div`
position: absolute;
bottom: -45px;
left:-10px;
background-image: url(${WaveImage});
height:100%;
width:100%;
background-size: 5000px 100px;
animation: ${animate} 50s linear infinite;
z-index: 1000;
animation-delay: 0s;
opacity:1;
overflow:hidden;

`;
const WaveTwo = styled(WaveOne)`
bottom:-25px;
animation: ${animate2} 35s linear infinite;
animation-delay: -5s;
z-index: 999;
opacity:0.6;
`;
const WaveThree = styled(WaveOne)`
bottom:-25px;
animation: ${animate} 50s linear infinite;
animation-delay: 5s;
z-index: 998;
opacity:0.5;
`;
const WaveFour = styled(WaveOne)`
bottom:-15px;
animation: ${animate2} 35px linear infinite;
animation-delay: 0s;
z-index: 997;
opacity:0.4;
`;
const WaveFive = styled(WaveOne)`
bottom:0px;
animation: ${animate} 50s linear infinite;
animation-delay: -5s;
z-index: 996;
opacity:0.3;
`;
const WaveSix = styled(WaveOne)`
bottom: 15px;
animation: ${animate2} 35px linear infinite;
animation-delay: 5s;
z-index: 995;
opacity:0.2;
`;

export { Wave, WaveWrapper, WaveOne, WaveTwo, WaveThree, WaveFour, WaveFive, WaveSix };

