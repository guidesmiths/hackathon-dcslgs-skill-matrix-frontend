import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SwitchButton, SwitchInput, SwitchSlider } from './Switch.styled';
import { changeUserRoleAsync } from '../../../redux/user/userSlice';

const Switch = ({ userId, role }) => {
  const dispatch = useDispatch();
  const roleChange = event => {
    const newRole = event.target.checked ? 'admin' : 'user';
    dispatch(changeUserRoleAsync(
      {
        userId,
        newRole,
      },
    ));
  };

  return (
    <SwitchButton>
      <SwitchInput defaultChecked={role === 'admin'} type="checkbox" onChange={roleChange}/>
      <SwitchSlider/>
    </SwitchButton>
  );
};
Switch.propTypes = {
  role: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default Switch;
