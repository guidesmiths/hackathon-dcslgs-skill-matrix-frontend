import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SkillNameStyled, SkillLevelStyled, SkillElementStyled, DescriptionStyled } from './SkillListElement.styled';

const sublevels = {
  minus: '-',
  neutral: '',
  plus: '+',
};

export const SkillListElement = ({ name, level, sublevel, comments, isSearched }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <SkillElementStyled isSearched={isSearched} onClick={() => setSelected(!isSelected)} >
      <SkillNameStyled>{name}</SkillNameStyled>
      <SkillLevelStyled>Level {level}{sublevels[sublevel]}</SkillLevelStyled>
      <DescriptionStyled>{comments}</DescriptionStyled>
    </SkillElementStyled>
  );
};

SkillListElement.propTypes = {
  comments: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sublevel: PropTypes.string.isRequired,
  isSearched: PropTypes.object,
};

SkillListElement.defaultProps = {
  isSearched: {},
};
