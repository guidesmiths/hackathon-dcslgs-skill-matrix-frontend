import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Header, TextWrapper, Heading, ContainerWrapper, Container, StyledButton } from './SelectCountry.styled';
import { changeUserCountryAsync } from '../../redux/user/userSlice';
import CountryRadioButton from './components/CountryRadioButton/CountryRadioButton';

const SelectCountry = ({ userId, userName, setIsSubmited }) => {
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();

  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };

  const submitCountry = () => {
    if (select !== '') {
      dispatch(changeUserCountryAsync(
        {
          userId,
          newCountry: select,
        },
      ));
    }
    setIsSubmited(true);
  };

  return (
    <Header>
      <TextWrapper>
        <Heading weight={400}> Hello {userName}, </Heading>
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

SelectCountry.propTypes = {
  setIsSubmited: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default SelectCountry;
