import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  RowSkills,
  RowSkillsCollapsed,
  RowWrapper,
  UserSkillName,
  UserInput,
} from '../UserPage.styled';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import LevelBar from './LevelBar';

const UserRow = ({ ecoId, skill, handleEditSkill }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const userSkill = useSelector(state => state.user.ecosystems[ecoId].find(
    selectedSkill => selectedSkill.id === skill.id,
  ));
  return (
    <Fragment>
      <RowWrapper>
        <RowSkills onSubmit={handleEditSkill}>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar level={userSkill.level} />
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
  ecoId: PropTypes.number.isRequired,
  handleEditSkill: PropTypes.func.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
