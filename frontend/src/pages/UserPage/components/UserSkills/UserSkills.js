import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCurrentEcosystem } from '../../../../redux/ecosystems/ecosystemsSlice';
import { selectSkillsWithLevel, selectEcosystemPerId } from '../../../../redux/user/userSlice';

import { ScrollWrapper } from '../../../../app/commons/ScrollWrapper';
import { Spinner } from '../../../../app/commons/Spinner';
import { StateComponent } from '../../../../app/commons/StateComponent';
import { UserRow } from '../UserRow';
import { LevelBar } from '../LevelBar';

import { UserData, DataTitle, RowTitle, ColumnTitles, ColumnTitle, UserInput, FormHeader, Wrapper } from '../../UserPage.styled';

export const UserSkills = ({ ecosystemIdSelected, edit, isSubmited, setIsSubmited, emptyState }) => {
  const userSkills = useSelector(selectSkillsWithLevel(ecosystemIdSelected));
  const selectedEcosystem = useSelector(selectEcosystemPerId(ecosystemIdSelected));
  const ref = useRef(null);

  const currentEcosystem = useSelector(selectCurrentEcosystem);

  const skillswithLevel = currentEcosystem?.skills.map(skill => {
    const index = userSkills.findIndex(
      userSkill => userSkill.id === skill.id,
    );
    const { level, sublevel, interested, comments } = index !== -1 ? userSkills[index] : { level: 0, interested: false, comments: '' };
    return {
      ...skill,
      level,
      sublevel,
      interested,
      comments,
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmited(false);
  };

  useEffect(() => {
    if (isSubmited) {
      ref.current.click();
    }
  }, [isSubmited]);

  return (
    <UserData data-cy="userRow">
      {emptyState && (
        <Wrapper>
          <StateComponent location="user" />
        </Wrapper>
      )}
      {!emptyState && (
        selectedEcosystem
          ? (
            <form onSubmit={handleSubmit}>
              <FormHeader>
                <RowTitle>
                  <DataTitle>{selectedEcosystem?.name}</DataTitle>
                  <LevelBar field="ecosystem" level={selectedEcosystem?.average} />
                  <UserInput ref={ref} type="submit" value="Save" />
                </RowTitle>
              </FormHeader>
              <ColumnTitles>
                <ColumnTitle>Skill Name</ColumnTitle>
                <ColumnTitle>Rating</ColumnTitle>
                <ColumnTitle>I&apos;d Like to learn</ColumnTitle>
              </ColumnTitles>
              {skillswithLevel && <ScrollWrapper height={70}>
                {skillswithLevel?.map((skill, index) => (
                  <UserRow
                    key={skill.id}
                    edit={edit}
                    i={index}
                    idEcosystem={ecosystemIdSelected}
                    skill={skill}
                  />
                ))}
              </ScrollWrapper>}
            </form>
          )
          : (
            <Wrapper>
              <Spinner />
            </Wrapper>
          )
      )}
    </UserData>
  );
};

UserSkills.defaultProps = {
  ecosystemIdSelected: 0,
  mySkills: [],
};

UserSkills.propTypes = {
  edit: PropTypes.bool.isRequired,
  emptyState: PropTypes.bool.isRequired,
  isSubmited: PropTypes.bool.isRequired,
  setIsSubmited: PropTypes.func.isRequired,
  ecosystemIdSelected: PropTypes.number,
};
