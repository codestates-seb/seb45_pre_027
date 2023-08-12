import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 타이틀을 위한 스타일 컴포넌트
const TitleStyled = styled.div`
  color: #3b4045;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 36.45px; /* 145.8% */
`;

// 주어진 타이틀을 표시하는 TitleComponent
const TitleComponent = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

const LayoutWithFetchTitle = () => {
  // 타이틀을 저장하기 위한 상태. 초기값은 'Loading...'
  const [title, setTitle] = useState('Loading...');

  useEffect(() => {
    // 백엔드에서 타이틀을 가져오기 위해 fetch API 사용
    fetch('/api/title-endpoint')
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
        setTitle(data.title); // 데이터에 'title' 필드가 있다고 가정
      })
      .catch((error) => {
        // 오류가 발생하면 오류를 로그에 출력하고 타이틀을 오류 메시지로 설정
        console.error('타이틀 가져오기 오류:', error);
        setTitle('타이틀 로딩 오류');
      });
  }, []); // 빈 종속성 배열은 이 useEffect가 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다

  return (
    <div>
      {/* TitleComponent를 사용하여 타이틀 표시 */}
      <TitleComponent title={title} />
      {/* 여기에 다른 컴포넌트를 추가할 수 있습니다 */}
    </div>
  );
};

export default LayoutWithFetchTitle;
