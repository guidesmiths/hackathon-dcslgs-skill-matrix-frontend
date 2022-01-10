import React from 'react';
import PropTypes from 'prop-types';
import SkillListElement from './SkillListElement/SkillListElement';
import { SkillListWrapper, SkillListStyled, FooterStyled, AdminRoleText } from './SkillList.styled';
import Switch from '../../../../../../app/commons/Switch/Switch';
import SpinnerLoader from '../../../../../../app/commons/Spinner/Spinner';

const SkillList = ({ isCollapsed, userId, role, skills }) => (
  <SkillListStyled data-cy="skill-list" isCollapsed={isCollapsed}>
    <SkillListWrapper height={55}>
      {!skills
        ? <SpinnerLoader/>
        : skills.map(({ id, level, levelDescription, name, sublevel }) => (
          <SkillListElement key={id} level={level} levelDescription={levelDescription} name={name} sublevel={sublevel}/>
        ))
      }
    </SkillListWrapper>
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
