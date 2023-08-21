import React from 'react';
import styled from 'styled-components';
import Edit from '../../../assets/images/edit_black_24dp.svg'; // SVG 파일 경로 수정

// const BlogListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
//   padding: 0px 1px 12.99px 1px;
//   align-items: flex-start;
// `;

// const BlogTitle = styled.h2`
//   display: flex;
//   width: 298px;
//   padding: 12px 183px 13.69px 15px;
//   align-items: flex-start;

//   border-radius: 4px 4px 0px 0px;
//   border-top: 1px solid #f1e5bc;
//   border-bottom: 1px solid #f1e5bc;
//   background: #fbf3d5;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-self: stretch;

//   color: #525960;
//   font-family: Inter;
//   font-size: 11px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 15.692px; /* 142.657% */
// `;

const BlogItem = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  height: 51px;
`;

const BlogLink = styled.a`
  color: #3b4045;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  display: flex;
  flex-direction: row;
  &:hover {
    text-decoration: underline;
  }
`;

const Item = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: center;
  /* align-items: center; */
  padding: 0.5rem;
  flex-direction: column;
`;
const PostSignatureImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15.999px;
  flex-shrink: 0;
  padding-right: 0.5rem;
`;

const TheOverflowBlogList = ({ posts }) => (
  // <BlogListContainer>
  //   <BlogTitle>The Overflow Blog</BlogTitle>

  <Item>
    {posts.map((post) => (
      <BlogItem key={post.id}>
        <BlogLink href={post.link}>
          <PostSignatureImg src={Edit} />
          {post.title}
        </BlogLink>
      </BlogItem>
    ))}
  </Item>
  // </BlogListContainer>
);

export default TheOverflowBlogList;
