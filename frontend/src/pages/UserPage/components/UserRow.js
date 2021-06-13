import React, { Fragment } from 'react';
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

const UserRow = ({
  skill,
  optionsList,
  handleEditInput,
  handleEditSkill,
  isCollapsed,
  setCollapsed,
}) => {
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
              id="vehicle1"
              name="vehicle1"
              type="checkbox"
              value="Bike"
            />
            <UserInput type="submit" value="Save" />
          </div>
        </RowSkills>
        <ArrowButton onClick={setCollapsed}>
          <span className="material-icons">{arrowButtonIcon}</span>
        </ArrowButton>
      </RowWrapper>
      <RowWrapper isCollapsed={isCollapsed}>
        <RowSkillsCollapsed>hello</RowSkillsCollapsed>
      </RowWrapper>
    </Fragment>
  );
};

UserRow.propTypes = {
  handleEditInput: PropTypes.func.isRequired,
  handleEditSkill: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  optionsList: PropTypes.array.isRequired,
  setCollapsed: PropTypes.func.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
