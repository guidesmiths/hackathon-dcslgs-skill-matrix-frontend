import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListElementUserHeader } from '../ListElementUserHeader';
import { AnswersListElementStyled } from '../../../HomePage/components/AnswersList/AnswersListElement/AnswersListElement.styled';
import { LoadingUserRow } from '../../../../app/commons/LoadingUserRow';

export const AnswersListUserElement = ({ email, name, index, country, seniority }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnswersListElementStyled data-cy={`answer-list-element-${index}`}>
      {!loading
        ? <ListElementUserHeader country={country} email={email} name={name} seniority={seniority}/>
        : <LoadingUserRow user/>
      }
    </AnswersListElementStyled>
  );
};

AnswersListUserElement.propTypes = {
  country: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  seniority: PropTypes.string.isRequired,
};
