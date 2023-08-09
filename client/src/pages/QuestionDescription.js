// 질문 상세보기 페이지
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import React from 'react';
import { LinkButton } from '../components/description_components/button/LinkButton';
import { AskButton } from '../components/description_components/button/AskButton';
import BookButton from '../components/description_components/button/BookButton';
import DownButton from '../components/description_components/button/DownButton';
import UpButton from '../components/description_components/button/UpButton';
import './QuestionDescription.css';
import UserInfoBox from '../components/description_components/user_info/UserInfoBox';
import BannerImg from '../components/description_components/banner/Banner';

const QuestionDescription = () => {
  const tag = ['firefox', 'proxy'];
  return (
    <div className="main_display">
      <AskButton>Ask Question</AskButton>
      <UpButton></UpButton>
      <DownButton></DownButton>
      <LinkButton>{tag[0]}</LinkButton>
      <UserInfoBox></UserInfoBox>
      <BannerImg></BannerImg>
      <BookButton />
    </div>
  );
};

export default React.memo(QuestionDescription);
