// 질문 상세보기 페이지
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import React from 'react';
import { LinkButton } from '../components/DescriptionComponents/ButtonComponents/TagButton';
import { AskButton } from '../components/DescriptionComponents/ButtonComponents/AskButton';
import BookButton from '../components/DescriptionComponents/ButtonComponents/BookButton';
import DownButton from '../components/DescriptionComponents/ButtonComponents/DownButton';
import './QuestionDescription.css';
import UserInfoBox from '../components/DescriptionComponents/user_info/UserInfoBox';
import BannerImg from '../components/DescriptionComponents/Banner/BannerComponents';
import ButtonList from '../components/DescriptionComponents/ButtonComponents/TextButton';
import { CommentBUT } from '../components/DescriptionComponents/ButtonComponents/AddComment';
import BalloonApp from '../components/Balloon/BalloonBox';
import UpButton from '../components/DescriptionComponents/ButtonComponents/UpButton';
import AddRelatedQuestionItem from '../components/DescriptionComponents/RelatedQuestions/RelatedQuestionItem';

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
        <AddRelatedQuestionItem></AddRelatedQuestionItem>
      </DescriptionBox>
    </div>
  );
};

export default React.memo(QuestionDescription);
