// Add a comment Button

import { styled } from 'styled-components';
import React, { useState } from 'react';
import { Balloon } from '../../Balloon/BalloonBox.js';

const Container = styled.div`
  display: flex;
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

const AddCommentBUT = styled.button`
  color: #838c95;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
  opacity: 0.6;
  border: none;
  height: 17px;
  padding: 0px;
  background-color: transparent;

  &:hover {
    color: #017fdf;
  }
`;

const BalloonBox = styled.div`
  position: absolute;
  margin-top: 1%;
  text-align: center;
  margin-left: 6rem;
`;

const BalloonText = styled.div`
  padding: 4%;
  color: #ffffff;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

export const CommentBUT = () => {
  const [showBalloon, setShowBalloon] = useState(false);

  const handleButtonClick = () => {
    setShowBalloon(true);
  };

  const handleMouseLeave = () => {
    setShowBalloon(false);
  };

  return (
    <Container>
      <AddCommentBUT
        onClick={handleButtonClick}
        // onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showBalloon && (
          <BalloonBox>
            <Balloon>
              <BalloonText>You must have 50 reputation to comment</BalloonText>
            </Balloon>
          </BalloonBox>
        )}
        Add a comment
      </AddCommentBUT>
    </Container>
  );
};
