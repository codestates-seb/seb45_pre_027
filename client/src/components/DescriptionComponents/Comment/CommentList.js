import React, { useState, useEffect } from 'react';
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

export const CommentGetList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 백엔드에서 타이틀을 가져오기 위해 fetch API 사용
    fetch(`${process.env.REACT_APP_SERVER_URL}answer/2`, {
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
