import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookButton from '../ButtonComponents/BookButton';
import ResetButton from '../ButtonComponents/Reset';
import CounterButton from '../ButtonCNP/UpDownButtonCounter';
import ButtonList from '../ButtonComponents/TextButton';
import { CommentBUT } from '../ButtonComponents/AddComment';
import { UserInfoTop } from '../user_info/UserInfo';
import { CommentGetListTest } from '../ListTest/CommentList';

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
  color: #232629;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.5px; /* 160.714% */
`;

// 컨텐츠 영역
const ContentText = styled.div`
  /* background-color: pink; */
  flex: 1;
  padding: 1rem;
  color: #232629;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.5px; /* 160.714% */
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
  // 타이틀을 저장하기 위한 상태. 초기값은 'Loading...'
  const [data, setData] = useState([]);
  // const [title, setTitle] = useState('Loading...');
  console.log(data);

  useEffect(() => {
    // 백엔드에서 타이틀을 가져오기 위해 fetch API 사용
    fetch(`${process.env.REACT_APP_SERVER_URL}board/1`, {
      method: 'get',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
      }),
    })
      .then((response) => {
        // 요청이 성공적인지 확인
        if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다');
        }
        // 응답에서 JSON 데이터 파싱
        return response.json();
      })
      .then((data) => {
        // 백엔드에서 가져온 타이틀로 상태 업데이트
        setData(data?.data?.title); // 데이터에 'title' 필드가 있다고 가정
        console.log(data);
      })
      .catch((error) => {
        // 오류가 발생하면 오류를 로그에 출력하고 타이틀을 오류 메시지로 설정
        console.error('타이틀 가져오기 오류:', error);
        setData('타이틀 로딩 오류');
      });
  }, []); // 빈 종속성 배열은 이 useEffect가 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  // // 더미 데이터 선언
  // const dummyData = {
  //   data: [
  //     {
  //       boardId: 3,
  //       userName: 'JimB',
  //       time: '10:30',
  //       title: `Well, I figured out the problem. Basically Go starting path for import is $HOME/go/src

  //       So I just needed to add myapp in front of the package names, that is, the import should be:`,
  //       content:
  //         'All imports are "local" regardless of the import path. See "How to Write Go Code" for a detailed explanation. ',
  //       date: 'Feb 18, 2016',
  //     },
  //     {
  //       boardId: 2,
  //       time: '10:30',
  //       userName: 'JimB',
  //       title: `You should have created your package with go mod init e.g. go mod init github.com/my-org/my-package

  //       Now in my-package you have a sub module called utils for example.`,
  //       content: `I'm not trying to make a philosophical statement, I'm literally saying all imports happen in your local filesystem; there is never any difference whether they originate from a remote repo or not. Don't try to use relative paths (they work sometimes, but are discouraged), and go through the "How to Write Go Code" document, specifically the section on`,
  //       date: 'Feb 18, 2021',
  //     },
  //     {
  //       boardId: 2,
  //       time: 1,
  //       title: 'Title 2',
  //       content: 'Content 2',
  //     },

  //     {
  //       boardId: 2,
  //       time: 1,
  //       title: 'Title 2',
  //       content: 'Content 2',
  //     },
  //   ],
  // };

  useEffect(() => {
    setData(setData.data); // 더미 데이터로 상태를 설정합니다.
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

                {/* {댓글 영역} */}
                <CommentGetListTest />

                <CommentBUT />
              </ButtonContentBox>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
};
