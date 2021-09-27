import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SkillNameStyled, SkillLevelStyled, SkillElementStyled, DescriptionStyled } from './SkillListElement.styled';

const SkillListElement = ({ skillName, level: skillLevel, description }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <SkillElementStyled onClick={() => setSelected(!isSelected)} >
      <SkillNameStyled>{skillName}</SkillNameStyled>
      <SkillLevelStyled>Level {skillLevel}</SkillLevelStyled>
      <DescriptionStyled>{description}</DescriptionStyled>
    </SkillElementStyled>
  );
};

SkillListElement.propTypes = {
  level: PropTypes.number.isRequired,
  skillName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkillListElement;
