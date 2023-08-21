// Add a comment Button

import { styled } from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
// import { Balloon } from '../Balloon/BalloonBox.js';
import CommentForm from '../Comment/CommentForm.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-shrink: 0;
  flex-wrap: wrap;
  border: none;
  width: 670.22px;
  padding: 0px 577.22px 0px 3px;
  align-items: flex-start;

  /* background-color: gray; */
`;
const ShowComment = styled.div`
  width: 670.22px;
`;
const AddCommentBUT = styled.button`
  color: #838c95;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  border: none;
  height: 17px;
  padding: 0px;
  margin-bottom: 0.5rem;
  background-color: transparent;

  &:hover {
    color: #017fdf;
  }
`;

// const BalloonBox = styled.div`
//   position: absolute;
//   margin-top: 1%;
//   text-align: center;
//   margin-left: 6rem;
// `;

// const BalloonText = styled.div`
//   padding: 4%;
//   color: #ffffff;
//   font-family: Inter;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 17px; /* 141.667% */
// `;

export const CommentBUT = () => {
  const [showComment, setShowComment] = useState(false);

  const containerRef = useRef(null);

  const handleButtonClick = () => {
    setShowComment(true);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowComment(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <AddCommentBUT onClick={handleButtonClick}>Add a Comment</AddCommentBUT>
      <ShowComment>{showComment && <CommentForm />}</ShowComment>
    </Container>
  );
};
