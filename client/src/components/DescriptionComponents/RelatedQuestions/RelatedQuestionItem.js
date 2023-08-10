import React from 'react';
import RelatedQuestions from './RelatedQuestionsBox'; // 파일 경로는 프로젝트에 맞게 변경해야 합니다.
import styled from 'styled-components';

const BorderBox = styled.div`
  border: 1.5px solid #c8ccd0;
  border-radius: 8px;
  margin-top: 20px;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
`;

const ItemBoxA = styled.div`
  border-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #c8ccd0;
  min-width: 38px;
  max-height: 26px;
  border-radius: 8px;

  height: 26px;
  width: 38px;

  height: max-content;
`;

const NumItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  padding-left: 10px;

  height: 50px;

  color: #3b4045;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 200% */
`;

const RelatedQuestionsText = styled.text`
  color: #0074cc;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;
const AddRelatedQuestionItem = () => {
  const relatedQuestions = [
    'How do I style components in React?',
    'What is the purpose of JSX?',
    'How can I pass props between components?',
  ];

  const NumItemList = [1, 2, 3];

  const Num = ({ numList, index }) => (
    <div>
      {numList.map((numList, index) => (
        <NumItemBox key={index}>
          <ItemBoxA>{numList}</ItemBoxA>
        </NumItemBox>
      ))}
    </div>
  );

  return (
    <div>
      <h2>Related Questions</h2>
      {/* 외각 라인 */}
      <BorderBox>
        {/* 내부 아이템 */}
        <ItemBox>
          <NumItemBox>
            <Num numList={NumItemList} />
          </NumItemBox>
          <RelatedQuestionsText>
            <RelatedQuestions questions={relatedQuestions} />
          </RelatedQuestionsText>
        </ItemBox>
      </BorderBox>
    </div>
  );
};

export default AddRelatedQuestionItem;
