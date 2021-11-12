import React from 'react';
import PropTypes from 'prop-types';
import SkillListElement from './SkillListElement/SkillListElement';
import { SkillListStyled, FooterStyled, AdminRoleText } from './SkillList.styled';
import Switch from '../../../../../../app/commons/Switch/Switch';
import ScrollWrapper from '../../../../../../app/commons/ScrollWrapper/ScrollWrapper';

const SkillList = ({ isCollapsed, userId, role, skills }) => (
  <SkillListStyled data-cy="skill-list" isCollapsed={isCollapsed}>
    <ScrollWrapper height={35}>
      {skills.map(({ id, level, levelDescription, name, sublevel }) => (
        <SkillListElement key={id} level={level} levelDescription={levelDescription} name={name} sublevel={sublevel}/>
      ))}
    </ScrollWrapper>
    <FooterStyled>
      <AdminRoleText>Admin Role</AdminRoleText>
      <Switch role={role} userId={userId}/>
    </FooterStyled>
  </SkillListStyled>
);

SkillList.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  skills: PropTypes.array,
};

SkillList.defaultProps = {
  skills: [],
};

export default SkillList;
