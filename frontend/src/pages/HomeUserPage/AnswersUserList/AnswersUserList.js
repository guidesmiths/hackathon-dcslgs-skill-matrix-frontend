import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnswersListUserElement from './AnswersListUserElement/AnswersListUserElement';
import { selectAllAnswers } from '../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper, NoAnswers } from '../../HomePage/components/AnswersList/AnswersList.styled';
import { selectUserData } from '../../../redux/user/userSlice';
import Pagination from '../../../app/commons/Pagination/Pagination';
import blankstate from '../../../Assets/Icons/blankstate.svg';
import { Image } from '../../HomePage/components/AnswersList/AnswersListElement/SkillList/SkillList.styled';

const AnswersUserList = ({ currentPage, numberOfPages, handlePagination }) => {
  const answers = useSelector(selectAllAnswers);
  const userData = useSelector(selectUserData);
  const [isEmtpy, setIsEmpty] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (answers.length === 0) {
        setIsEmpty(true);
      }
    }, [2000]);
  }, [answers]);
  return (
    <AnswersListStyled>
      <ScrollWrapper data-cy={'answers-list'}>
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
          ? <Pagination currentPage={currentPage > numberOfPages ? numberOfPages : currentPage} numberOfPages={numberOfPages} shape={'rounded'} size={'16px'} onChange={handlePagination} />
          : isEmtpy && <NoAnswers>
            <Image src={blankstate}/>
            <p>There no person with this skill</p>
          </NoAnswers>
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

export default AnswersUserList;
