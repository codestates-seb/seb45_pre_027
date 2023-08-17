import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments?post_id=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
