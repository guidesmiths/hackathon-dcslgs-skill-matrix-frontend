import React from 'react';
import PropTypes from 'prop-types';
import SkillListElement from './SkillListElement/SkillListElement';
import { SkillListStyled, FooterStyled, AdminRoleText } from './SkillList.styled';
import Switch from '../../../../../../app/commons/Switch/Switch';

const SkillList = ({ isCollapsed, skills }) => (
  <SkillListStyled data-cy="skill-list" isCollapsed={isCollapsed}>
    {skills.map(({ skillName, level, id, description }) => (
      <SkillListElement key={id} level={level} skillName={skillName} description={description}/>
    ))}
    <FooterStyled>
      <AdminRoleText>Admin Role</AdminRoleText>
      <Switch/>
    </FooterStyled>
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
