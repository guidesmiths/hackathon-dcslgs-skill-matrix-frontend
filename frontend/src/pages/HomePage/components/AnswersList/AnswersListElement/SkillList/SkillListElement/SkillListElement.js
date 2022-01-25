import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SkillNameStyled, SkillLevelStyled, SkillElementStyled, DescriptionStyled } from './SkillListElement.styled';

const sublevels = {
  minus: '-',
  neutral: '',
  plus: '+',
};

const SkillListElement = ({ name, level, sublevel, levelDescription, isSearched }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <SkillElementStyled isSearched={isSearched} onClick={() => setSelected(!isSelected)} >
      <SkillNameStyled>{name}</SkillNameStyled>
      <SkillLevelStyled>Level {level}{sublevels[sublevel]}</SkillLevelStyled>
      <DescriptionStyled>{levelDescription}</DescriptionStyled>
    </SkillElementStyled>
  );
};

SkillListElement.propTypes = {
  level: PropTypes.number.isRequired,
  levelDescription: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sublevel: PropTypes.string.isRequired,
  isSearched: PropTypes.bool,
};

SkillListElement.defaultProps = {
  isSearched: null,
};

export default SkillListElement;
