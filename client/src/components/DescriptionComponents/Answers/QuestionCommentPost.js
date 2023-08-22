//답변 작성 영역 / 텍스트 에디터 영역

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css'; // 스타일
import { useParams } from 'react-router-dom';

// 스타일드 컴포넌트 정의
const Container = styled.div`
  border-top: 1.1px solid #e0e0e0;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: blueviolet; */
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

const AnswerOk = styled.div`
  height: fit-content;
  width: max-content;
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-size: 13px;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding-left: 1rem;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: bolder;
  color: white;
`;

const QuestionComment = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  // const [expecting, setExpecting] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부를 관리하는 상태

  const handleSubmit = () => {
    console.log(handleSubmit);
    fetch(`${process.env.REACT_APP_SERVER_URL}answer/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({
        title: title,
        content: content,
        // expecting: expecting,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTitle(''); // 텍스트 에디터 리셋
        setContent(''); // 텍스트 에디터 리셋
        setShowModal(true); // 모달 표시

        // 방법 1: 페이지 전체를 새로고침
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // const QuestionComment = () => {
  //   // const [title, setTitle] = useState('');
  //   const [content, setContent] = useState('');
  //   // const [expecting, setExpecting] = useState('');
  //   const [showModal, setShowModal] = useState(false);

  //   console.log(QuestionComment);

  //   const params = useParams(); // get question ID from URL params
  //   const boardId = params.id; // assume this is available in the current route

  //   const handleSubmit = () => {
  //     const data = JSON.stringify({
  //       // title: title,
  //       content: content,
  //       // expecting: expecting,
  //     });

  //     // fetch(`${process.env.REACT_APP_SERVER_URL}answer/${boardId}`, {
  //     fetch(`${process.env.REACT_APP_SERVER_URL}answer/1`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: data,
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         // setTitle(''); // reset fields
  //         setContent('');
  //         // setExpecting('');
  //         setShowModal(true); // show modal
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   };

  return (
    <Container>
      <Title>Your Answer</Title>
      <StyledQuill value={content} onChange={setContent} />

      <SubmitButton onClick={handleSubmit}>Post Your Answer</SubmitButton>

      {/* 모달 창 */}
      {showModal && (
        <AnswerOk>
          답변 완료 되었습니다
          <CloseButton onClick={() => setShowModal(false)}>닫기</CloseButton>
        </AnswerOk>
      )}
    </Container>
  );
};

export default QuestionComment;
