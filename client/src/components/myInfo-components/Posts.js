import React from 'react';
import PostImg from './PostImg';
import BoxContainer from './BoxContainer';
import EmptyContainer from './EmptyContainer';

function Posts({ title, content }) {
  return (
    <BoxContainer>
      <h3>Posts</h3>
      {content ? (
        <p>{content}</p>
      ) : (
        <EmptyContainer>
          <PostImg />
          <div>
            Just getting started? Try answering a question!
            <br /> <br />
            Your most helpful questions, answers and tags will appear here.
            Start by <a>answering a question</a> or <a>selecting tags</a> that
            match topics you’re interested in.
          </div>
        </EmptyContainer>
      )}
    </BoxContainer>
  );
}

export default Posts;
