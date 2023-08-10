// 질문 상세보기 페이지
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import React from 'react';
import { LinkButton } from '../components/DescriptionComponents/Button/TagButton';
import { AskButton } from '../components/DescriptionComponents/Button/AskButton';
import BookButton from '../components/DescriptionComponents/Button/BookButton';
import DownButton from '../components/DescriptionComponents/Button/DownButton';
import UpButton from '../components/DescriptionComponents/Button/UpButton';
import './QuestionDescription.css';
import UserInfoBox from '../components/DescriptionComponents/user_info/UserInfoBox';
import BannerImg from '../components/DescriptionComponents/Banner/Banner';
import ButtonList from '../components/DescriptionComponents/Button/Button';
import { CommentBUT } from '../components/DescriptionComponents/Button/AddComment';
import BalloonApp from '../components/Balloon/BalloonBox';

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionDescription = () => {
  const tag = ['firefox', 'proxy'];
  return (
    <div className="main_display">
      <DescriptionBox>
        <AskButton>Ask Question</AskButton>
        <UpButton></UpButton>
        <DownButton></DownButton>
        <LinkButton>{tag[0]}</LinkButton>
        <UserInfoBox></UserInfoBox>
        <BannerImg></BannerImg>
        <ButtonList />
        <CommentBUT />
        <BookButton />
      </DescriptionBox>
    </div>
  );
};

export default React.memo(QuestionDescription);
