import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  RowSkills,
  UserSkillName,
  UserInput,
  RowSkillsTop,
  RowCollapsed,
} from '../UserPage.styled';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import LevelBar from './LevelBar';
import { updateUserSkill } from '../../../redux/user/userSlice';

const UserRow = ({ skill, idEcosystem, skillIndex }) => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(skill?.toLearn || false);

  const handleCheckBox = () => {
    setCheck(!isChecked);
    dispatch(
      updateUserSkill({
        index: idEcosystem,
        skillId: skillIndex,
        skill: { ...skill, toLearn: isChecked },
      }),
    );
  };

  const handleLevel = event => {
    const selectValue = event.target.value;
    dispatch(
      updateUserSkill({
        index: idEcosystem,
        skillId: skillIndex,
        skill: { ...skill, level: selectValue },
      }),
    );
  };

  return (
    <Fragment>
      <RowSkillsTop>
        <RowSkills>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar level={skill.level} />
          <div>
            <UserInput
              checked={isChecked}
              name="checkToLearn"
              type="checkbox"
              onChange={handleCheckBox}
            />
          </div>
        </RowSkills>
        <ArrowButton type="button" onClick={() => setCollapsed(!isCollapsed)}>
          <span className="material-icons">{arrowButtonIcon}</span>
        </ArrowButton>
      </RowSkillsTop>
      <RowCollapsed isCollapsed={isCollapsed}>
        <p>{skill.levels[skill.level - 1].description}</p>
        <select onChange={handleLevel}>
          {skill.levels.map(level => (
            <>
              {level.number === skill.level ? (
                <option selected>{level.number}</option>
              ) : (
                <option>{level.number}</option>
              )}
            </>
          ))}
        </select>
      </RowCollapsed>
    </Fragment>
  );
};

UserRow.propTypes = {
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
  skillIndex: PropTypes.number.isRequired,
};

export default UserRow;
