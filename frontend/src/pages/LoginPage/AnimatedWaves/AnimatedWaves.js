import React from 'react';
import { WaveComponent, WaveWrapper, Wave } from './AnimatedWaves.styled';

const AnimatedWaves = () => (
  <WaveComponent>
    <WaveWrapper>
      <Wave animation={1} bottom={-45} delay={0} opacity={1} speed={50} zIndex={1000}/>
      <Wave bottom={-25} delay={-5} opacity={0.6} speed={35} zIndex={999}/>
      <Wave animation={'animate'} bottom={-25} delay={-5} opacity={0.5} speed={50} zIndex={998}/>
      <Wave bottom={-15} delay={5} opacity={0.5} speed={35} zIndex={997}/>
      <Wave animation={'animate'} bottom={0} delay={-5} opacity={0.3} speed={50} zIndex={996}/>
      <Wave bottom={15} delay={5} opacity={0.2} speed={35} zIndex={995}/>
    </WaveWrapper>
  </WaveComponent>
);

export default AnimatedWaves;
