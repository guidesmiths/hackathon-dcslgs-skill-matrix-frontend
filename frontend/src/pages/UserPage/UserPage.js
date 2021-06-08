import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay, UserData } from './UserPage.styled';
import { fetchUserAsync, selectUser } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';

const HomePage = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleEcosystem = system => {
    console.log(system);
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, []);

  return (
    <UserPageStyled data-cy="user">
      <h1>Hi {user.name}</h1>
      <UserPageDisplay>
        <Ecosystems
          ecosystem={['React', 'Big Data', 'NodeJS']}
          handleEcosystem={handleEcosystem}
        />
        <UserData>
          <span>Skill Name</span>
          <span>Rating</span>
          <span>I&apos;d Like to learn</span>
          {user?.ecosystems?.map(system => system?.skills?.map(skill =>
            <div key={skill.id}>
              <span>{skill.name}</span>
              <span>{skill.level}</span>
              <span>yes/no</span>
            </div>))}
        </UserData>
      </UserPageDisplay>
    </UserPageStyled>
  );
};

export default HomePage;
