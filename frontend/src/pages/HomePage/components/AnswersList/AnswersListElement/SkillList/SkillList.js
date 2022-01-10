import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SkillListElement from './SkillListElement/SkillListElement';
import { SkillListWrapper, SkillListStyled, FooterStyled, AdminRoleText, SpinnerWrapper } from './SkillList.styled';
import Switch from '../../../../../../app/commons/Switch/Switch';
import { selectCurrentAnswers } from '../../../../../../redux/answers/answersSlice';
import SpinnerLoader from '../../../../../../app/commons/Spinner/Spinner';

const SkillList = ({ isCollapsed, userId, role }) => {
  const [skills, setSkills] = useState();
  const answers = useSelector(selectCurrentAnswers(userId));

  useEffect(() => {
    if (!isCollapsed) {
      setSkills(answers?.ecosystems?.flatMap(ecosystem => ecosystem.skills));
    }
  }, [answers, isCollapsed]);

  return (
    <SkillListStyled data-cy="skill-list" isCollapsed={isCollapsed}>
      <SkillListWrapper height={55}>
        {!skills
          ? <SpinnerWrapper>
            <SpinnerLoader/>
          </SpinnerWrapper>
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
};

SkillList.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default SkillList;
