import React from 'react';
import styled from 'styled-components';
import Pagination from './pagenation';
import UserInfo from './UserInfo';

const StyledQuestionList = styled.div`
  color: black;
`;

const QuestionListContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 2275.45px;
  flex-direction: column;
  padding-top: 30px;
  /* gap: 24px; */
`;

const QuestionListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QuestionListHeaderTitle = styled.div`
  font-size: 26px;
  font-weight: solid;
  padding-left: 20px;
`;

const QuestionListHeaderAskQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: rgb(10, 149, 255);
  border-radius: 5px;
  font-size: 13px;
  color: white;
`;

const QuestionListViewAndFilter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QuestionListViewCount = styled.div`
  font-size: 18px;
  padding-left: 20px;
`;

const QuestionListFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 13px;
`;

const QuestionListNewestFilter = styled.div`
  margin-left: 10px;
  padding-right: 10px;
  border-right: 1px solid gray;
`;

const QuestionListActiveFilter = styled.div`
  margin-right: 10px;
  padding-left: 10px;
`;

const QuestionListBar = styled.div`
  margin-top: 14px;
  border-top: 1px solid gray;
`;

const QuestionsContainer = styled.div`
  padding: 14px 0 14px 0;
  padding-left: 20px;
  border-bottom: 1px solid gray;
`;

const QuestionVoteAnswerView = styled.div`
  /* display: flex;
  flex-direction: row; */
  font-size: 13px;
  color: gray;
  gap: 10px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuestionTitle = styled.div`
  color: blue;
  font-size: 18px;
`;

const QuestionContent = styled.div`
  font-size: 14px;
`;

const QuestionTagsAndPostTime = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QuestionPostTime = styled.div`
  font-size: 13px;
  color: gray;
`;

// const QuestionListPage = () => {
//   // 페이지네이션
//   const [page, setPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalElements, setTotalElements] = useState(0);
// };

// 질문 리스트 페이지
const QuestionList = () => {
  return (
    <StyledQuestionList>
      <QuestionListContainer>
        <QuestionListHeader>
          <QuestionListHeaderTitle>All Questions</QuestionListHeaderTitle>
          <QuestionListHeaderAskQuestion>
            Ask Question
          </QuestionListHeaderAskQuestion>
        </QuestionListHeader>

        <QuestionListViewAndFilter>
          <QuestionListViewCount>{} questions</QuestionListViewCount>

          <QuestionListFilterContainer>
            <QuestionListNewestFilter>
              <div>Newest</div>
            </QuestionListNewestFilter>
            <QuestionListActiveFilter>
              <div>Active</div>
            </QuestionListActiveFilter>
          </QuestionListFilterContainer>
        </QuestionListViewAndFilter>

        <QuestionListBar>
          <QuestionsContainer>
            <QuestionVoteAnswerView>
              <div>{} votes</div>
              <div>{} answers</div>
              <div>{} views</div>
            </QuestionVoteAnswerView>

            <Question>
              <QuestionTitle>{}This is title</QuestionTitle>
              <QuestionContent>{}Content is long</QuestionContent>

              <QuestionTagsAndPostTime>
                <QuestionPostTime>asked {} ago</QuestionPostTime>
              </QuestionTagsAndPostTime>
            </Question>
          </QuestionsContainer>
        </QuestionListBar>
      </QuestionListContainer>
    </StyledQuestionList>
  );
};

export default QuestionList;
