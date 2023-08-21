import React from 'react';
import styled from 'styled-components';

const UserInfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;

  * {
    margin-right: 3px;
  }

  img {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    position: relative;
    top: -1px;
  }

  a {
    color: #0074cc;
  }

  span {
    color: #6a737c;
  }

  span:nth-child(3) {
    font-weight: bold;
    color: #525960;
  }
`;

const UserInfo = ({ nickName, createdAt, modifiedAt }) => {
  // 질문 등록, 수정 시간
  const displayAt = (time) => {
    const milliSeconds = new Date().getTime() - new Date(time).getTime();
    const seconds = milliSeconds / 1000;
    if (seconds < 60) {
      return `${seconds} secs ago`;
    }
    const minutes = seconds / 60;
    if (minutes < 60) {
      return `${Math.floor(minutes)} min ago`;
    }
    const hours = minutes / 60;
    if (hours < 24) {
      return `${Math.floor(hours)} hour ago`;
    }
    const days = hours / 24;
    if (days < 7) {
      return `${Math.floor(days)} day ago`;
    }
    const weeks = days / 7;
    if (weeks < 5) {
      return `${Math.floor(weeks)} week ago`;
    }
    const months = days / 30;
    if (months < 12) {
      return `${Math.floor(months)} month ago`;
    }
    const years = days / 365;
    return `${Math.floor(years)} year ago`;
  };

  return (
    <UserInfoWrapper>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaH_aEbQRByxWC_xtuFy1AlMZVDm8w7IS99jZsZE8LoAyWqqBoTopPj5zHa4B0485AhE&usqp=CAU"
        alt="profile img"
      />
      <a href="/mypage">{nickName}</a>
      <span>5,281</span>
      <span>{modifiedAt ? 'modified' : 'asked'}</span>
      <span>{modifiedAt ? displayAt(modifiedAt) : displayAt(createdAt)}</span>
    </UserInfoWrapper>
  );
};

export default UserInfo;
