import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './pagenation';
// import UserInfo from './UserInfo';
import Tag from './Tag';

const Main = styled.div`
  color: black;
`;

const Section = styled.div`
  display: flex;
  width: 1100px;
  height: 2275.45px;
  flex-direction: column;
  padding-top: 30px;
  /* justify-content: space-between; */
  /* gap: 24px; */
`;

const List = styled.li`
  display: flex;
  /* border-bottom: 1px solid rgb(216, 217, 220); */
  box-sizing: border-box;
  padding: 16px;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 28px; */
  /* padding-left: 24px; */
`;

const HeaderTitle = styled.div`
  font-size: 26px;
  /* font-weight: solid; */
  padding-left: 20px;
`;

const AskQuestionbt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: #0a95ff;
  border-radius: 5px;
  font-size: 13px;
  color: white;
  &:hover {
    filter: brightness(120%);
  }
`;

const ViewAndFilterbt = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ViewCount = styled.div`
  width: 251px;
  margin: 0, 10px, 0, 0;
  font-size: 18px;
  padding-left: 20px;
  color: #232629;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 13px;
`;

const NewestFilter = styled.div`
  margin-left: 10px;
  padding-right: 10px;
  border-right: 1px solid gray;
`;

const ActiveFilter = styled.div`
  margin-right: 10px;
  padding-left: 10px;
`;

// const QuestionListBar = styled.div`
//   margin-top: 14px;
//   border-top: 1px solid lightgold;
// `;

const QuestionsContainer = styled.div`
  width: 751px;
  height: 146.08px;
  padding: 16px, 16px, 17px, 0px;
  /* border: 0px, 0px, 1px, 0px; */
  gap: 16px;
  box-sizing: border-box;
  border-top: 1px solid rgb(216, 217, 220);
`;

const QuestionVoteAnswerView = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: gray;
  gap: 10px;
  margin-top: 20px;
  /* border-top: 1px solid rgb(216, 217, 220); */
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.div`
  color: #0074cc;
  font-size: 15px;
  cursor: pointer;
  vertical-align: top;
  margin-top: 10px;
`;

const QuestionContent = styled.div`
  font-size: 12px;
  display: inline-block;
  color: #3b4045;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  /* line-height: 1.4; */
  /* height: 2.8em; */
  text-align: left;
`;

const QuestionTagsAndPostTime = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
`;

const UserInfo = styled.div`
  font-size: 13px;
  color: #0074cc;

  img {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    position: relative;
    top: -1px;
  }
`;

const QuestionPostTime = styled.div`
  font-size: 13px;
  color: gray;
  /* text-align: right; */
`;

const dummyData = {
  data: [
    {
      borderId: 3,
      title: 'Title 1',
      content: 'Content 1',
    },
    {
      borderId: 4,
      title: 'Title 2',
      content: 'Content 2',
    },
    {
      borderId: 5,
      title: 'Title 3',
      content: 'Content 3',
    },
  ],
};

// 질문 리스트 페이지
const QuestionList = () => {
  // 페이지네이션
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Main>
      <Section>
        <Header>
          <HeaderTitle>All Questions</HeaderTitle>
          <AskQuestionbt>Ask Question</AskQuestionbt>
        </Header>

        <ViewAndFilterbt>
          <ViewCount>{} questions</ViewCount>

          <FilterContainer>
            <NewestFilter>
              <div>Newest</div>
            </NewestFilter>
            <ActiveFilter>
              <div>Active</div>
            </ActiveFilter>
          </FilterContainer>
        </ViewAndFilterbt>
        <List>
          {/* <QuestionListBar> */}
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
                <UserInfo>username</UserInfo>
                <QuestionPostTime>asked {} ago</QuestionPostTime>
              </QuestionTagsAndPostTime>
            </Question>
          </QuestionsContainer>
          {/* </QuestionListBar> */}
        </List>

        {/* <List> */}
        {/* <QuestionListBar> */}
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
              <UserInfo>username</UserInfo>
              <QuestionPostTime>asked {} ago</QuestionPostTime>
            </QuestionTagsAndPostTime>
          </Question>
        </QuestionsContainer>
        {/* </QuestionListBar> */}
        {/* </List> */}

        {/* <List> */}
        {/* <QuestionListBar> */}
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
              <UserInfo>username</UserInfo>
              <QuestionPostTime>asked {} ago</QuestionPostTime>
            </QuestionTagsAndPostTime>
          </Question>
        </QuestionsContainer>
        {/* </QuestionListBar> */}
        {/* </List> */}
      </Section>
      <Pagination page={page} totalPages={totalPages} />
    </Main>
  );
};

export default QuestionList;
