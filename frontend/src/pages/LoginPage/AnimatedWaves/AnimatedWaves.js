import React from 'react';
import { Wave, WaveWrapper, WaveOne, WaveTwo, WaveThree, WaveFour, WaveFive, WaveSix } from './AnimatedWaves.styled';

const AnimatedWaves = () => (
  <Wave>
    <WaveWrapper>
      <WaveOne/>
      <WaveTwo/>
      <WaveThree/>
      <WaveFour/>
      <WaveFive/>
      <WaveSix/>
    </WaveWrapper>
  </Wave>
);


export default AnimatedWaves;
