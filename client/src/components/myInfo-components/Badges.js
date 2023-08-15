import React from 'react';
import BoxContainer from './BoxContainer';
import EmptyContainer from './EmptyContainer';

function Badges({ content }) {
  return (
    <BoxContainer>
      <h3>Badges</h3>
      {content ? (
        <p>{content}</p>
      ) : (
        <EmptyContainer>
          <div>
            You have not earned any <a>badges.</a>
          </div>
        </EmptyContainer>
      )}
    </BoxContainer>
  );
}

export default Badges;
