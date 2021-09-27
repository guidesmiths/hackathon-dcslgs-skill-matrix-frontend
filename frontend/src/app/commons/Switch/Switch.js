import React from 'react';
import { SwitchButton, SwitchImput, SwitchSlider } from './Switch.styled';

const Switch = () => {
  const changeHandler = e => {
    console.log(e.target.checked);
  };
  return (
    <SwitchButton>
      <SwitchImput type="checkbox" onChange={ changeHandler }/>
      <SwitchSlider/>
    </SwitchButton>
  );
};

export default Switch;
