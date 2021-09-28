import React from 'react';
import { SwitchButton, SwitchImput, SwitchSlider } from './Switch.styled';

const Switch = () => (
  <SwitchButton>
    <SwitchImput type="checkbox" />
    <SwitchSlider/>
  </SwitchButton>
);

export default Switch;
