import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserData, TableTitleLeft, TableTitleCenter, TableRowLeft, TableRowCenter, RowSkills } from '../UserPage.styled';
import { selectUser } from '../../../redux/user/userSlice';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';

const UserSkills = ({ setCollapsed, isCollapsed, handleEditSkill }) => {
  const user = useSelector(selectUser);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <UserData>
      <RowSkills>
        <TableTitleLeft>Skill Name</TableTitleLeft>
        <TableTitleCenter>Rating</TableTitleCenter>
        <TableTitleCenter>I&apos;d Like to learn</TableTitleCenter>
      </RowSkills>
      {user?.ecosystems?.map(system => system?.skills?.map(skill =>
        <form key={skill.id} onSubmit={handleEditSkill}>
          <RowSkills >
            <TableRowLeft>{skill.name}</TableRowLeft>
            <TableRowCenter>{skill.level}</TableRowCenter>
            <TableRowCenter>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <ArrowButton onClick={setCollapsed}>
                <span className="material-icons">{arrowButtonIcon}</span>
              </ArrowButton>
            </TableRowCenter>
            <input type="submit" value="Submit"/>
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
