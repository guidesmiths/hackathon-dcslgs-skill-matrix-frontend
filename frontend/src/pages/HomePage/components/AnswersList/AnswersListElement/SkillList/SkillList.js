import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SkillListElement from './SkillListElement/SkillListElement';
import { SkillListWrapper, SkillListStyled, FooterStyled, AdminRoleText, LoaderWrapper, Image, NoSkills } from './SkillList.styled';
import Switch from '../../../../../../app/commons/Switch/Switch';
import { selectCurrentAnswers } from '../../../../../../redux/answers/answersSlice';
import blankstate from '../../../../../../Assets/Icons/blankstate.svg';
import SpinnerLoader from '../../../../../../app/commons/Spinner/Spinner';
import { selectSkillFilters } from '../../../../../../redux/filters/filtersSlice';

const SkillList = ({ index, isCollapsed, userId, role }) => {
  const [skills, setSkills] = useState();
  const [loaded, hasLoaded] = useState(false);
  const answers = useSelector(selectCurrentAnswers(userId));
  const skillFilters = useSelector(selectSkillFilters);

  useEffect(() => {
    if (!isCollapsed) {
      setSkills(answers?.ecosystems?.flatMap(ecosystem => ecosystem.skills));
      setTimeout(() => hasLoaded(true), [2000]);
    }
  }, [answers, isCollapsed]);

  const NoRecords = () => <>
    <Image src={blankstate}/>
    <NoSkills>No records have been added yet</NoSkills>
  </>;

  return (
    <SkillListStyled data-cy="skill-list" isCollapsed={isCollapsed}>
      <SkillListWrapper height={55}>
        {!skills && <LoaderWrapper>
          {loaded
            ? <NoRecords />
            : <SpinnerLoader/>
          }
        </LoaderWrapper>}
        {skills && skills.map(({ id, level, levelDescription, name, sublevel }) => (
          <SkillListElement key={id} isSearched={skillFilters.find(x => x.skill === id)} level={level} levelDescription={levelDescription} name={name} sublevel={sublevel}/>
        ))}
      </SkillListWrapper>
      <FooterStyled data-cy={`switch-admin-${index}`}>
        <AdminRoleText>Admin Role</AdminRoleText>
        <Switch role={role} userId={userId}/>
      </FooterStyled>
    </SkillListStyled>
  );
};

SkillList.propTypes = {
  index: PropTypes.number.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default SkillList;
