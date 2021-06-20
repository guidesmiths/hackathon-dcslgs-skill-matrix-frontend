import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  RowSkills,
  RowSkillsCollapsed,
  RowWrapper,
  UserSkillName,
  UserInput,
  RowSkillsTop,
} from '../UserPage.styled';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import LevelBar from './LevelBar';

const UserRow = ({ skill }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <Fragment>
      <RowSkillsTop>
        <RowSkills>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar level={skill.level} />
          <div>
            <UserInput name="checkToLearn" type="checkbox" />
          </div>
        </RowSkills>
        <ArrowButton type="button" onClick={() => setCollapsed(!isCollapsed)}>
          <span className="material-icons">{arrowButtonIcon}</span>
        </ArrowButton>
      </RowSkillsTop>
      <RowWrapper isCollapsed={isCollapsed}>
        <RowSkillsCollapsed>Temporary content</RowSkillsCollapsed>
      </RowWrapper>
    </Fragment>
  );
};

UserRow.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default UserRow;
