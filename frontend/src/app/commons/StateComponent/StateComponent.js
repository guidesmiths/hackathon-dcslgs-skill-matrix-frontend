import PropTypes from 'prop-types';
import React from 'react';
import { StateWrapper, Image } from './StateComponent.styled';
import completeProfile from '../../../Assets/Images/completeProfile.png';
import admin from '../../../Assets/Images/Admin.png';

const StateComponent = ({ location }) => {
  const isUser = location === 'user';
  return (
    <StateWrapper>
      <Image isUser={isUser} src={isUser ? completeProfile : admin}/>
      {isUser
        ? <p>Complete your profile selecting ecosystems that match with you and complete your skill based on what you know about them</p>
        : <p>Add all the ecosystem needed and complete them with the skill that the employee can have in them</p>
      }

    </StateWrapper>
  );
};

StateComponent.propTypes = {
  location: PropTypes.string.isRequired,
};

export default StateComponent;
