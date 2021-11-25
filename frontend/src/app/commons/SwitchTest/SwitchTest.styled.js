import styled from 'styled-components';
import { SwitchButton, SwitchSlider, SwitchInput } from '../Switch/Switch.styled';

const SwitchTestButton = styled(SwitchButton)`
  margin: 0 10px;
`;

const SwitchTestSlider = styled(SwitchSlider)`
  &:before {
    background: #006B79;
  }
`;

const SwitchTestInput = SwitchInput;

export { SwitchTestButton, SwitchTestInput, SwitchTestSlider };
