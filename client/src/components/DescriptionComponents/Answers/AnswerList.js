import React, { useState, useEffect } from 'react';

const LayoutWithBlogList = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // 백엔드 API 주소를 아래 URL에 설정합니다.
    const apiUrl = 'https://example.com/api/data';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error(
          'There was a problem with the fetch operation:',
          error.message,
        );
      });
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행
};

export default LayoutWithBlogList;
