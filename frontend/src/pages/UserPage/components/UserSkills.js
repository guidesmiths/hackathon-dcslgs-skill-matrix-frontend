import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserData, RowSkills, UserInput, DataTitle } from '../UserPage.styled';
import { selectUser } from '../../../redux/user/userSlice';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import LevelBar from './LevelBar';

const UserSkills = ({ setCollapsed, isCollapsed, handleEditSkill }) => {
  const user = useSelector(selectUser);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <UserData>
      <RowSkills>
        <DataTitle>Skill Name</DataTitle>
        <DataTitle>Rating</DataTitle>
        <DataTitle>I&apos;d Like to learn</DataTitle>
      </RowSkills>
      {user?.ecosystems?.map(system => system?.skills?.map(skill =>
        <form key={skill.id} onSubmit={handleEditSkill}>
          <RowSkills >
            <UserInput id="skillName" name="skillName" type="text" value={skill.name}/>
            <LevelBar level={skill.level}/>
            <div>
              <UserInput id="vehicle1" name="vehicle1" type="checkbox" value="Bike"/>
              <UserInput type="submit" value="Save"/>
              <ArrowButton onClick={setCollapsed}>
                <span className="material-icons">{arrowButtonIcon}</span>
              </ArrowButton>
            </div>
          </RowSkills>
        </form>))}
    </UserData>
  );
};

UserSkills.propTypes = {
  handleEditSkill: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default UserSkills;
