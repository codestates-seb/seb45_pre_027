import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-top: 1px solid #e0e0e0;
  padding: 1rem;
  width: 1;
`;

const AddButton = styled.button`
  background-color: #0a95ff;
  text-align: center;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 35px;

  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 11.39px 12.72px 11.39px 11.39px;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 125% */

  &:hover {
    background-color: hsl(209, 100%, 32%);
  }
`;

const Help = styled.text`
  color: #0a95ff;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  width: max-content;
  /* height: 100px; */
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  resize: vertical; // 사용자가 세로 방향으로만 크기를 조절할 수 있게 합니다.
`;

const CommentForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [expecting, setExpecting] = useState('');
  // const [boardId, setboardId] = useState('');

  const handleSubmit = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}board`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({
        title: title,
        content: content,
        expecting: expecting,
        // boardId: boardId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // onCommentAdded(data);
        setContent(''); // 텍스트 에디터 리셋
        setTitle('');
        setExpecting('');
        // setboardId('');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledTextarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write a title..."
      />

      <StyledTextarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a content..."
      />

      <StyledTextarea
        value={expecting}
        onChange={(e) => setExpecting(e.target.value)}
        placeholder="Write a expecting..."
      />

      <ButtonList>
        <AddButton type="submit">Add Comment</AddButton>
        <Help>help</Help>
      </ButtonList>
    </Form>
  );
};

export default CommentForm;
