import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  RowSkills,
  UserInput,
  RowSkillsCollapsed,
  RowWrapper,
} from '../UserPage.styled';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import LevelBar from './LevelBar';
import Input from '../../../app/commons/Input/Input';

const UserRow = ({ skill, optionsList, handleEditInput, handleEditSkill }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <Fragment>
      <RowWrapper>
        <RowSkills onSubmit={handleEditSkill}>
          <Input
            input={skill.name}
            name="skillName"
            optionsList={optionsList}
            width="40px"
            onChangeInput={handleEditInput}
          />
          <LevelBar level={skill.level} />
          <div>
            <UserInput
              name="checkToLearn"
              type="checkbox"
            />
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
  handleEditInput: PropTypes.func.isRequired,
  handleEditSkill: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
