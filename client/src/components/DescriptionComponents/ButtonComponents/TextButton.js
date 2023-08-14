// Share, Edit, Follow Button

import { styled } from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  width: 446.22px;
  padding-right: 0px;
  align-items: flex-start;
  align-content: flex-start;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const Share = styled.button`
  display: flex;
  padding: 4px 5.92px 4px 4px;
  align-items: flex-start;
  background-color: transparent;
  border: none;

  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    color: #6a737c69;
  }
`;

const Edit = styled.button`
  display: flex;
  padding: 4px 5.36px 4px 4px;
  align-items: flex-start;
  background-color: transparent;
  border: none;

  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    color: #6a737c69;
  }
`;

// const Follow = styled.button`
//   display: flex;
//   padding: 4px 5.73px 4px 4px;
//   align-items: flex-start;
//   background-color: transparent;
//   border: none;

//   color: #6a737c;
//   font-family: Inter;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 17px; /* 141.667% */

//   &:hover {
//     color: #6a737c69;
//   }
// `;

const Follow = styled.button`
  display: flex;
  padding: 4px 5.73px 4px 4px;
  align-items: flex-start;
  background-color: transparent;
  border: none;
  position: relative; /* 부모 요소가 상대 위치여야 자식 요소의 절대 위치 설정 가능 */

  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    color: #6a737c69;
  }
`;

const Balloon = styled.div`
  display: flex;
  position: absolute;
  top: 40px;

  justify-content: center;
  align-items: center;
  /* left: -80%; */

  width: 250px;
  height: 30px;

  border-radius: 6px;
  border: 1px solid #d6d9dc;
  background: #fff;
  box-shadow:
    0px 3px 8px 0px rgba(0, 0, 0, 0.09),
    0px 2px 6px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.06);
`;

const BalloonText = styled.div`
  padding: 2%;

  color: #0c0d0e;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

function ButtonList() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing((prevState) => !prevState);
  };
  const handleMouseEnter = () => {
    setShowBalloon(true);
  };

  const handleMouseLeave = () => {
    setShowBalloon(false);
  };

  return (
    <Container>
      <Share>Share</Share>
      <Edit>Edit</Edit>
      {/* <Follow onClick={handleButtonClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </Follow> */}
      <Follow
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isFollowing ? 'Following' : 'Follow'}
        {showBalloon && (
          <Balloon>
            <BalloonText>
              Follow this question to receive notifications
            </BalloonText>
          </Balloon>
        )}
      </Follow>
    </Container>
  );
}

export default ButtonList;
