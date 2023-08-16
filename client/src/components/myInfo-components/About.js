import React from 'react';
import BoxContainer from './BoxContainer';
import EmptyContainer from './EmptyContainer';

function About({ content }) {
  return (
    <BoxContainer>
      <h3>About</h3>
      {content ? (
        <p>{content}</p>
      ) : (
        <EmptyContainer>
          <div>
            Your about me section is currently blank. Would you like to add one?{' '}
            <a>Edit profile</a>
          </div>
        </EmptyContainer>
      )}
    </BoxContainer>
  );
}

export default About;
