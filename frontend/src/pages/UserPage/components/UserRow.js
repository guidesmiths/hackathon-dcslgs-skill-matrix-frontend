import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  RowSkills,
  UserSkillName,
  UserInput,
  RowCollapsed,
  RowSkillsTop,
  RowSkillsBottom,
} from '../UserPage.styled';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import LevelBar from './LevelBar';
import { updateUserSkill } from '../../../redux/user/userSlice';
import Input from '../../../app/commons/InputGeneral/Input';

const UserRow = ({ skill, idEcosystem }) => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(skill?.interested || false);
  const { id, name, level, levels, comments, interested } = skill;

  const handleCheckBox = () => {
    setCheck(!isChecked);
    dispatch(
      updateUserSkill({ id, name, level, comments, interested: !isChecked }),
    );
  };

  const handleLevel = event => {
    const selectValue = event.target.value;

    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: {
          id,
          name,
          comments,
          interested,
          level: Number(selectValue),
        },
      }),
    );
  };

  const handleComments = event => {
    const commentsValue = event.target.value;

    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { id, name, level, interested, comments: commentsValue },
      }),
    );
  };

  return (
    <div>
      <RowSkillsTop
        data-cy={`userSkill-${name}`}
        isRowDown={!isCollapsed}
      >
        <RowSkills>
          <UserSkillName>{name}</UserSkillName>
          <LevelBar level={level} />
          <div>
            <UserInput
              checked={isChecked}
              name="checkInterested"
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
        <RowSkillsBottom>
          <p>{levels[level].description}</p>
          <select value={level} onChange={handleLevel}>
            {levels.map((e, index) => (
              <option key={index} value={e.level}>
                {e.level}
              </option>
            ))}
          </select>
        </RowSkillsBottom>

        <RowSkillsBottom>
          <Input
            input={comments}
            placeholder="Write some comments"
            onChangeInput={handleComments}
          />
        </RowSkillsBottom>
      </RowCollapsed>
    </div>
  );
};

UserRow.propTypes = {
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
