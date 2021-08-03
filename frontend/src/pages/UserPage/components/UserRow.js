import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  RowSkills,
  UserSkillName,
  UserInput,
  RowSkillsTop,
  RowCollapsed,
} from '../UserPage.styled';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import LevelBar from './LevelBar';
import { updateUserSkill } from '../../../redux/user/userSlice';

const UserRow = ({ skill, idEcosystem }) => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(skill?.interested || false);

  const handleCheckBox = () => {
    setCheck(!isChecked);
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, interested: !isChecked },
      }),
    );
  };

  const handleLevel = event => {
    const selectValue = event.target.value;
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, level: selectValue },
      }),
    );
  };

  return (
    <div>
      <RowSkillsTop data-cy={`userSkill-${skill.name}`}>
        <RowSkills>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar level={skill.level} />
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
        <p>{skill.levels[skill.level].description}</p>
        <select value={skill.level} onChange={handleLevel}>
          {skill.levels.map((e, index) => (
            <option key={index} value={e.level}>
              {e.level}
            </option>
          ))}
        </select>
      </RowCollapsed>
    </div>
  );
};

UserRow.propTypes = {
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
