import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListElementHeaderUser from './ListElementHeaderUser';
import AnswersListElementStyled from '../../../HomePage/components/AnswersList/AnswersListElement/AnswersListElement.styled';
import LoadingUserRowUser from '../../../../app/commons/LoadingUserRow/LoadingUserRowUser';

const AnswersListElementUser = ({ email, name, index, country, seniority }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnswersListElementStyled data-cy={`answer-list-element-${index}`}>
      {!loading
        ? <ListElementHeaderUser country={country} email={email} name={name} seniority={seniority}/>
        : <LoadingUserRowUser/>
      }
    </AnswersListElementStyled>
  );
};

AnswersListElementUser.propTypes = {
  country: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  seniority: PropTypes.string.isRequired,
};

export default AnswersListElementUser;
