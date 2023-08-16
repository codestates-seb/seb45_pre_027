import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css'; // 스타일

// 스타일드 컴포넌트 정의
const Container = styled.div`
  /* border: 2px solid #e0e0e0; */
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #232629;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: bolder;
  line-height: 24.7px; /* 145.294% */
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledQuill = styled(ReactQuill)`
  height: 200px;
  margin-bottom: 5rem;
`;

const SubmitButton = styled.button`
  height: fit-content;
  width: max-content;
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin: 0px 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const QuestionComment = () => {
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부를 관리하는 상태

  const handleSubmit = () => {
    console.log(handleSubmit);
    fetch(`${process.env.REACT_APP_SERVER_URL}/board/1`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ content: content }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setContent(''); // 텍스트 에디터 리셋
        setShowModal(true); // 모달 표시
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Title>Your Answer</Title>
      <StyledQuill value={content} onChange={setContent} />
      <SubmitButton onClick={handleSubmit}>Post Your Answer</SubmitButton>

      {/* 모달 창 */}
      {showModal && (
        <div>
          답변 완료 되었습니다
          <button onClick={() => setShowModal(false)}>닫기</button>
        </div>
      )}
    </Container>
  );
};

export default QuestionComment;
