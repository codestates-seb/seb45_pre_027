import { useState, useEffect } from 'react';
import styled from 'styled-components';

// 전체 박스
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-top: 1px solid #e0e0e0;
`;
// 질문의 내용을 표시하기 위한 주요 섹션.
const ContentSection = styled.div`
  display: flex;
  /* background-color: aqua; */
`;

// 컨텐트 영역
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: bisque; */
  flex: 1;
  margin: 0.5rem;
`;

// 컨텐츠 영역
const ContentText = styled.div`
  /* background-color: pink; */
  flex: 1;
  padding: 0.5rem;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

// 유저 아이디
const UserId = styled.text`
  color: #0074cc;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  line-height: 17px; /* 141.667% */
`;

// 작성 날짜
const Date = styled.text`
  color: #9e9e9e;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  line-height: 17px; /* 141.667% */
`;

// 작성 시간
const Time = styled.text`
  color: #9e9e9e;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  line-height: 17px; /* 141.667% */
`;

export const CommentGetListTest = () => {
  const [data, setData] = useState([]);

  // 더미 데이터 선언
  const dummyData = {
    data: [
      // {
      //   boardId: 3,
      //   userName: 'JimB',
      //   time: '10:30',
      //   title: `Well, I figured out the problem. Basically Go starting path for import is $HOME/go/src
      //   So I just needed to add myapp in front of the package names, that is, the import should be:`,
      //   content:
      //     'All imports are "local" regardless of the import path. See "How to Write Go Code" for a detailed explanation. ',
      //   date: 'Feb 18, 2016',
      // },
      // {
      //   boardId: 2,
      //   time: '10:30',
      //   userName: 'JimB',
      //   title: `You should have created your package with go mod init e.g. go mod init github.com/my-org/my-package
      //   Now in my-package you have a sub module called utils for example.`,
      //   content: `I'm not trying to make a philosophical statement, I'm literally saying all imports happen in your local filesystem; there is never any difference whether they originate from a remote repo or not. Don't try to use relative paths (they work sometimes, but are discouraged), and go through the "How to Write Go Code" document, specifically the section on`,
      //   date: 'Feb 18, 2021',
      // },
      // {
      //   boardId: 2,
      //   time: '10:30',
      //   userName: 'JimB',
      //   title: 'Title 2',
      //   content: 'Content 2',
      //   date: 'Feb 18, 2023',
      // },
      // {
      //   boardId: 2,
      //   time: '10:30',
      //   userName: 'JimB',
      //   title: 'Title 2',
      //   content: 'Content 2',
      //   date: 'Feb 18, 2021',
      // },
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
                <ContentBox>
                  <ContentText>
                    {data.content} - <UserId>{data.userName}</UserId>
                    <Date> {data.date}</Date>
                    <Time> at {data.time}</Time>
                  </ContentText>
                </ContentBox>
              </ContentSection>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
};
