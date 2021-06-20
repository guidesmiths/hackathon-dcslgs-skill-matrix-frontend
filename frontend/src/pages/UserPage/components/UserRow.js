import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  RowSkills,
  RowSkillsCollapsed,
  RowWrapper,
  UserSkillName,
  UserInput,
} from '../UserPage.styled';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import LevelBar from './LevelBar';

const UserRow = ({ skill, handleEditSkill }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <Fragment>
      <RowWrapper>
        <RowSkills onSubmit={handleEditSkill}>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar level={skill.level} />
          <div>
            <UserInput name="checkToLearn" type="checkbox" />
            <UserInput type="submit" value="Save" />
          </div>
        </RowSkills>
        <ArrowButton onClick={() => setCollapsed(!isCollapsed)}>
          <span className="material-icons">{arrowButtonIcon}</span>
        </ArrowButton>
      </RowWrapper>
      <RowWrapper isCollapsed={isCollapsed}>
        <RowSkillsCollapsed>Temporary content</RowSkillsCollapsed>
      </RowWrapper>
    </Fragment>
  );
};

UserRow.propTypes = {
  handleEditSkill: PropTypes.func.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
