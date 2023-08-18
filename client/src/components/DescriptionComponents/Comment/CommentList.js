import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const CommentList = ({ boardId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}board=${boardId}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [boardId]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
