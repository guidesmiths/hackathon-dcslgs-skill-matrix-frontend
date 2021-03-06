import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SkillListElement } from './SkillListElement';
import { SkillListWrapper, SkillListStyled, FooterStyled, AdminRoleText, LoaderWrapper, Image, NoSkills } from './SkillList.styled';
import { Switch } from '../../../../../../app/commons/Switch';
import { selectCurrentAnswers, selectStatus } from '../../../../../../redux/answers/answersSlice';
import blankstate from '../../../../../../Assets/Icons/blankstate.svg';
import { Spinner } from '../../../../../../app/commons/Spinner';
import { selectSkillFilters } from '../../../../../../redux/filters/filtersSlice';

export const SkillList = ({ index, isCollapsed, userId, role }) => {
  const [skills, setSkills] = useState();
  const [loaded, hasLoaded] = useState(false);
  const answers = useSelector(selectCurrentAnswers(userId));
  const status = useSelector(selectStatus);
  const skillFilters = useSelector(selectSkillFilters);

  useEffect(() => {
    if (!isCollapsed) {
      setSkills(answers?.ecosystems?.flatMap(ecosystem => ecosystem.skills));
      hasLoaded(status === 'succeded');
    }
  }, [answers, isCollapsed, status]);

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
            : <Spinner/>
          }
        </LoaderWrapper>}
        {skills && skills.map(({ id, level, comments, name, sublevel }) => (
          <SkillListElement key={id} comments={comments} isSearched={skillFilters.find(x => x.skill === id)} level={level} name={name} sublevel={sublevel}/>
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
