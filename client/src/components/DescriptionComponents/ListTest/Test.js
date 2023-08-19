import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookButton from '../ButtonComponents/BookButton';
import ResetButton from '../ButtonComponents/Reset';
import CounterButton from '../ButtonCNP/UpDownButtonCounter';
import ButtonList from '../ButtonComponents/TextButton';
import { CommentBUT } from '../ButtonComponents/AddComment';
import { UserInfoTop } from '../user_info/UserInfo';

// 전체 박스
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
// 질문의 내용을 표시하기 위한 주요 섹션.
const ContentSection = styled.div`
  display: flex;
  /* background-color: aqua; */
`;

// 추천, 반대 및 북마크와 같은 동작 버튼을 위한 섹션.
const ButtonSection = styled.div`
  width: 56.78px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-direction: column;
`;

// 동작 버튼 그룹.
const ButtonGroup = () => (
  <ButtonSection>
    <CounterButton />
    <BookButton />
    <ResetButton />
  </ButtonSection>
);

// 컨텐트 영역
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: bisque; */
  flex: 1;
  margin: 0.5rem;
`;

// 타이틀 영역
const Title = styled.div`
  /* background-color: blue; */
  padding: 1rem;
`;

// 컨텐츠 영역
const ContentText = styled.div`
  /* background-color: pink; */
  flex: 1;
  padding: 1rem;
`;

// 버튼 박스

const ButtonContentBox = styled.div`
  margin-left: 56.78px;
  padding-top: 0;
  /* background-color: red; */
`;

// 질문을 한 유저의 프로필을 표시하기 위한 섹션.
const UserInfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const QuestionCommentGetList = () => {
  const [data, setData] = useState([]);

  // 더미 데이터 선언
  const dummyData = {
    data: [
      {
        boardId: 3,
        time: 1,
        title: 'Title 1',
        content: 'Content 1',
      },
      {
        boardId: 2,
        time: 2,
        title: 'Title 2',
        content: 'Content 2',
      },
      {
        boardId: 2,
        time: 1,
        title: 'Title 2',
        content: 'Content 2',
      },

      {
        boardId: 2,
        time: 1,
        title: 'Title 2',
        content: 'Content 2',
      },
    ],
  };

  useEffect(() => {
    setData(dummyData.data); // 더미 데이터로 상태를 설정합니다.
  }, []);

  return (
    <div>
      {/* <h2>Blog List</h2> */}
      <ul>
        {data.map((data, boardId) => (
          <li key={boardId}>
            <Container>
              <ContentSection>
                <ButtonGroup />
                <ContentBox>
                  <Title>{data.title}</Title>
                  <ContentText>{data.content}</ContentText>
                </ContentBox>
              </ContentSection>

              <ButtonContentBox>
                <ButtonList />
                <UserInfoSection>
                  {/* {유저 박스 영역} */}
                  <UserInfoTop />
                  {/* {유저 박스 영역} */}
                </UserInfoSection>

                <CommentBUT />
              </ButtonContentBox>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
};
