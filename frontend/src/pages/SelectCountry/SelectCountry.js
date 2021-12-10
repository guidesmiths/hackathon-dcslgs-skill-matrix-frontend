import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Header,
  TextWrapper,
  Heading,
  ContanerWrapper,
  Container, Country,
  Label,
  Image,
  RadioButton,
  RadioButtonLabel,
  Item,
  StyledButton,
} from './SelectCountry.styled';
import { changeUserCountryAsync } from '../../redux/user/userSlice';
import spain from '../../Assets/Icons/Spain.svg';
import uk from '../../Assets/Icons/UK.svg';
import ro from '../../Assets/Icons/ro.svg';

const SelectCountry = ({ userId, setIsSubmited }) => {
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
        <Heading weight={400}> Hello Esther, </Heading>
        <Heading weight={700}> Please set up your team country</Heading>
      </TextWrapper>
      <ContanerWrapper>
        <Container>
          <Country>
            <Item>
              <RadioButton
                checked={select === 'Romania'}
                name="radio"
                type="radio"
                value="Romania"
                onChange={event => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <Label>Romania</Label>
              <Image src={ro}/>
            </Item>
          </Country>
          <Country>
            <Item>
              <RadioButton
                checked={select === 'Spain'}
                name="radio"
                type="radio"
                value="Spain"
                onChange={event => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <Label>Spain</Label>
              <Image src={spain}/>
            </Item>
          </Country>
          <Country>
            <Item>
              <RadioButton
                checked={select === 'UK'}
                name="radio"
                type="radio"
                value="UK"
                onChange={event => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <Label>UK</Label>
              <Image src={uk}/>
            </Item>
          </Country>
        </Container>
        <StyledButton onClick={submitCountry}>Set Location</StyledButton>
      </ContanerWrapper>
    </Header>
  );
};
SelectCountry.propTypes = {
  setIsSubmited: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default SelectCountry;
