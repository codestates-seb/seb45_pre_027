import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 (스타일을 원하면 추가/수정할 수 있습니다)
const ContentContainer = styled.div`
  overflow-y: auto;
  height: 300px; // 예시 높이입니다. 원하는 대로 조절 가능합니다.
`;

const QuestionContent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // 데이터를 불러오는 함수
  const loadMore = () => {
    fetch(`/api/questions?page=${page}`)
      .then((response) => response.json())
      .then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      });
  };

  useEffect(() => {
    // IntersectionObserver를 사용하여 무한 스크롤 구현
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 연결 해제
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      loadMore();
    }
  };

  return (
    <ContentContainer>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <div ref={loader}>로딩...</div>
    </ContentContainer>
  );
};

export default QuestionContent;
