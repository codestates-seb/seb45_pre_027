import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const jsonData = require('./data.json'); // JSON 데이터 파일 경로로 변경해야 함

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

const RelatedQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // JSON 데이터를 가져오는 부분 활성화
    setQuestions(jsonData);
  }, []);

  return (
    <RelatedQuestionsContainer>
      {questions.map((question, index) => (
        <RelatedQuestionItem key={index}>
          <ItemBoxNum>{question.title}</ItemBoxNum>{' '}
          {/* question 객체의 필드에 따라 변경 */}
        </RelatedQuestionItem>
      ))}
    </RelatedQuestionsContainer>
  );
};

export default RelatedQuestions;
