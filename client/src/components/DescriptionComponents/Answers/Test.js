import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BoardList = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [boardId, setBoardId] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}board?page=1&size=10`, {
      method: 'get',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // 백엔드에서 가져온 타이틀로 상태 업데이트
        setData(data?.data);
        setTitle(data?.data?.title); // 데이터에 'title' 필드가 있다고 가정
        setContent(data?.data?.content); // 데이터에 'title' 필드가 있다고 가정
        setBoardId(data?.data?.boardId); // 데이터에 'title' 필드가 있다고 가정
      })

      .then((result) => {
        const fetchedTitles = result.data.map((data) => data.title);
        const fetchedContent = result.data.map((data) => data.content);
        const fetchedBoardId = result.data.map((data) => data.boardId);

        // setLoading(false);

        setTitle(fetchedTitles);
        setContent(fetchedContent);
        setBoardId(fetchedBoardId);
      });
  }, []);

  return (
    <div>
      <h2>Board Titles</h2>
      <ul>
        <Container>
          {title.map((title, boardId) => (
            <li key={boardId}>
              <div>
                console.log()
                <strong dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </li>
          ))}
          {/* {titles.map((title, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: title }} />
          ))} */}
        </Container>
      </ul>
    </div>
  );
};

export default BoardList;

const Container = styled.div`
  background-color: blue;
  width: fit-content;
  height: fit-content;
  padding: 3rem;
`;
