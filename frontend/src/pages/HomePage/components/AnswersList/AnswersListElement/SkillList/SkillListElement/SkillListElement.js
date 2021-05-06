import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SkillNameStyled, SkillLevelStyled, SkillElementStyled } from './SkillListElement.styled';

const SkillListElement = ({ skillName, level: skillLevel }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <SkillElementStyled onClick={() => setSelected(!isSelected)} >
      <SkillNameStyled>{skillName}</SkillNameStyled>
      <SkillLevelStyled>Level {skillLevel}</SkillLevelStyled>
    </SkillElementStyled>
  );
};

SkillListElement.propTypes = {
  level: PropTypes.number.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillListElement;
