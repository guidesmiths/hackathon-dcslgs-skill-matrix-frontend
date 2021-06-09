import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserData, TableTitleLeft, TableTitleCenter, TableRowLeft, TableRowCenter, RowSkills } from '../UserPage.styled';
import { selectUser } from '../../../redux/user/userSlice';
import { ArrowButton } from '../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';

const UserSkills = ({ setCollapsed, isCollapsed }) => {
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
        <RowSkills key={skill.id}>
          <TableRowLeft>{skill.name}</TableRowLeft>
          <TableRowCenter>{skill.level}</TableRowCenter>
          <TableRowCenter>yes/no
            <ArrowButton onClick={setCollapsed}>
              <span className="material-icons">{arrowButtonIcon}</span>
            </ArrowButton>
          </TableRowCenter>
        </RowSkills>))}
    </UserData>
  );
};

UserSkills.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default UserSkills;
