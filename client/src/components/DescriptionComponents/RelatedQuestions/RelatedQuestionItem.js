import React, { useEffect } from 'react';
import RelatedQuestions from './RelatedQuestionsBox'; // 파일 경로는 프로젝트에 맞게 변경해야 합니다.
import styled from 'styled-components';

const jsonData = require('./data.json'); // JSON 데이터 파일 경로로 변경해야 함

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

const Num = ({ idList }) => (
  <div>
    {idList.map((id, index) => (
      <NumItemBox key={index}>
        <ItemBoxA>{id}</ItemBoxA>
      </NumItemBox>
    ))}
  </div>
);

const AddRelatedQuestionItem = () => {
  // const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // 데이터를 state로 가져오는 부분은 주석 처리
    // fetch('/RelatedQuestions/RelatedQuestionsBox.json') // JSON 데이터 파일 경로로 변경해야 함
    //   .then((response) => response.json())
    //   .then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      <h2>Related Questions</h2>
      {/* 외각 라인 */}
      <BorderBox>
        {/* 내부 아이템 */}
        <ItemBox>
          <NumItemBox>
            <Num idList={jsonData.map((item) => item.id)} /> {/* 수정된 부분 */}
          </NumItemBox>
          <RelatedQuestionsText>
            <RelatedQuestions questions={jsonData} />
          </RelatedQuestionsText>{' '}
        </ItemBox>
      </BorderBox>
    </div>
  );
};

export default AddRelatedQuestionItem;
