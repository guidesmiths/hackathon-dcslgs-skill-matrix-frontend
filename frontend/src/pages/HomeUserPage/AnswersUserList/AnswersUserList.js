import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllAnswers } from '../../../redux/answers/answersSlice';
import { selectUserData } from '../../../redux/user/userSlice';
import blankstate from '../../../Assets/Icons/blankstate.svg';

import Pagination from '../../../app/commons/Pagination';
import { AnswersListUserElement } from './AnswersListUserElement';

import { AnswersListStyled, ScrollWrapper, NoAnswers } from '../../HomePage/components/AnswersList/AnswersList.styled';
import { Image } from '../../HomePage/components/AnswersList/AnswersListElement/SkillList/SkillList.styled';

export const AnswersUserList = ({ currentPage, numberOfPages, handlePagination }) => {
  const answers = useSelector(selectAllAnswers);
  const userData = useSelector(selectUserData);
  const [isEmtpy, setIsEmpty] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (answers.length === 0) {
        setIsEmpty(true);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [answers]);

  const actualPage = currentPage > numberOfPages ? numberOfPages : currentPage;

  return (
    <AnswersListStyled>
      <ScrollWrapper data-cy="answers-list">
        {answers
          .filter(answer => answer.id !== userData.user_id)
          .map((answer, index) => {
            const { id, name, email, ecosystems, country, seniority } = answer;
            return (
              <AnswersListUserElement
                key={`answers-${id}`}
                country={country}
                email={email}
                index={index}
                name={name}
                seniority={seniority}
                skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
                userId={id}
              />);
          })
        }
        {answers.length > 0
          ? <Pagination currentPage={actualPage} numberOfPages={numberOfPages} shape="rounded" onChange={handlePagination} />
          : isEmtpy && (
            <NoAnswers>
              <Image src={blankstate}/>
              <p>There no person with this skill</p>
            </NoAnswers>
          )
        }
      </ScrollWrapper>
    </AnswersListStyled>
  );
};

AnswersUserList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number,
};

AnswersUserList.defaultProps = {
  numberOfPages: 1,
};
