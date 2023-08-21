import styled from 'styled-components';
import React from 'react';

const QuestionInformation = styled.div`
  display: flex;
  width: 1051px;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const BlogItem = styled.div`
  margin-bottom: 10px;
`;

const BlogLink = styled.a`
  /* 여기에 필요한 스타일 추가 */
`;

const DateInfo = styled.span`
  margin-right: 10px;
  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

const ViewCount = styled.span`
  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

const ViewText = styled.text`
  color: #232629;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
  margin-left: 2px;
`;
const Information = ({ posts }) => (
  <QuestionInformation>
    {posts.map((post) => (
      <BlogItem key={post.id}>
        <BlogLink href={post.link}>{post.title}</BlogLink>
        <DateInfo>
          Asked: <ViewText>{post.postedDate}</ViewText>
        </DateInfo>
        <DateInfo>
          Modified:<ViewText>{post.updatedDate}</ViewText>
        </DateInfo>
        <ViewCount>
          Viewed:<ViewText>{post.viewCount} </ViewText> times
        </ViewCount>
      </BlogItem>
    ))}
  </QuestionInformation>
);

export default Information;
