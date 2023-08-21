import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin-top: 10px;
`;

const CommentContent = styled.p``;
const CommentAuthor = styled.span`
  font-weight: bold;
`;

const Comment = ({ comment }) => (
  <CommentWrapper>
    <CommentAuthor>{comment.author}</CommentAuthor>
    <CommentContent>{comment.content}</CommentContent>
  </CommentWrapper>
);

export default Comment;
