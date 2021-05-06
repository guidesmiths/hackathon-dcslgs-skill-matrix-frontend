import React from 'react';
import PropTypes from 'prop-types';
import SkillListElement from './SkillListElement/SkillListElement';
import SkillListStyled from './SkillList.styled';

const SkillList = ({ isCollapsed, skills }) => (
  <SkillListStyled data-cy="skill-list" isCollapsed={isCollapsed}>
    {skills.map(({ skillName, level, id }) => (
      <SkillListElement key={id} level={level} skillName={skillName}/>
    ))}
  </SkillListStyled>
);

SkillList.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  skills: PropTypes.array,
};

SkillList.defaultProps = {
  skills: [],
};

export default SkillList;
