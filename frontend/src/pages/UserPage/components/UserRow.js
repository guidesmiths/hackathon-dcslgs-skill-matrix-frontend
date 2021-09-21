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
  RowLevel,
} from '../UserPage.styled';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import LevelBar from './LevelBar';
import { updateUserSkill } from '../../../redux/user/userSlice';
import Input from '../../../app/commons/InputGeneral/Input';
import Icon from '../../../app/commons/Icon/icon';

const UserRow = ({ skill, idEcosystem }) => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(skill?.interested || false);
  const { id, name, level, levels, comments, interested, sublevel } = skill;

  const handleCheckBox = () => {
    setCheck(!isChecked);
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { id, name, level, comments, interested: !isChecked },
      }),
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
          sublevel,
        },
      }),
    );
  };

  const handleComments = event => {
    const commentsValue = event.target.value;

    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: {
          id,
          name,
          level,
          interested,
          comments: commentsValue,
          sublevel,
        },
      }),
    );
  };

  const handleSublevel = sublevelValue => {
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: {
          id,
          name,
          level,
          interested,
          comments,
          sublevel: sublevelValue,
        },
      }),
    );
  };

  return (
    <div>
      <RowSkillsTop data-cy={`userSkill-${name}`} isRowDown={!isCollapsed}>
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
          <p>
            {level
              ? levels[level - 1]?.description
              : 'Please select corresponding level'}
          </p>
          <RowLevel>
            <select value={level} onChange={handleLevel}>
              <option value=""> </option>
              {levels.map((e, index) => (
                <option key={index} value={e.level}>
                  {e.level}
                </option>
              ))}
            </select>
            <Icon icon={'add'} onClick={() => handleSublevel('plus')} />
            <Icon icon={'remove'} onClick={() => handleSublevel('minus')} />
            <p>{sublevel && sublevel}</p>
          </RowLevel>
          <select data-cy="userSkill-select" value={level} onChange={handleLevel}>
            <option value=""> </option>
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
