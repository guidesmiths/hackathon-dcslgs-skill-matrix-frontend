import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserData, changeUserCountryAsync } from '../../redux/user/userSlice';

import { Header, TextWrapper, Heading, ContainerWrapper, Container, StyledButton } from './SelectCountry.styled';
import { CountryRadioButton } from './CountryRadioButton';

export const SelectCountry = () => {
  const history = useHistory();
  const userData = useSelector(selectUserData);
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();

  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };

  const submitCountry = () => {
    if (select !== '') {
      dispatch(changeUserCountryAsync({
        userId: userData.id,
        newCountry: select,
      }));

      history.push('/profile');
    }
  };

  return (
    <Header>
      <TextWrapper>
        <Heading weight={400}> Hello {userData.name}, </Heading>
        <Heading weight={700}> Please set up your team country</Heading>
      </TextWrapper>
      <ContainerWrapper>
        <Container>
          <CountryRadioButton country="Romania" handleSelectChange={handleSelectChange} select={select} />
          <CountryRadioButton country="Spain" handleSelectChange={handleSelectChange} select={select} />
          <CountryRadioButton country="UK" handleSelectChange={handleSelectChange} select={select} />
          <CountryRadioButton country="Hungary" handleSelectChange={handleSelectChange} select={select} />
        </Container>
        <StyledButton onClick={submitCountry}>Set Location</StyledButton>
      </ContainerWrapper>
    </Header>
  );
};
