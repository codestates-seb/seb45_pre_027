import React from 'react';
import styled from 'styled-components';

const RelatedQuestionsContainer = styled.div`
  /* margin-top: 20px; */
`;
const ItemBoxNum = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

const RelatedQuestionItem = styled.div`
  font-size: 16px;
  width: 693px;
  align-items: center;
  /* height: 50px; */
  /* width: 693px; */
  /* background-color: aqua; */
`;

const RelatedQuestions = ({ questions }) => {
  return (
    <RelatedQuestionsContainer>
      {questions.map((question, index) => (
        <RelatedQuestionItem key={index}>
          <ItemBoxNum>{question}</ItemBoxNum>
        </RelatedQuestionItem>
      ))}
    </RelatedQuestionsContainer>
  );
};

export default RelatedQuestions;
