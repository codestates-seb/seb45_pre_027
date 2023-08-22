import styled from 'styled-components';

// 질문 상세 페이지를 위한 주 컨테이너 스타일링.

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  display: flex;
  width: 1100px;
  max-width: 1100px;
  margin-bottom: 2rem;
`;

// 메인 컨텐츠와 사이드바를 위한 컨테이너.
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

// 메인 타이틀과 추가 정보를 포함하는 상단 컨텐츠.
export const TopContent = styled.div`
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
`;

// 질문, 설명 및 관련 작업을 포함하는 메인 컨텐츠.
export const MainContent = styled.div`
  flex: 3;
  margin-right: 20px;
  /* background-color: aquamarine; */
`;

// 블로그 리스트와 같은 추가 컨텐츠를 위한 사이드바.
export const SideBarBox = styled.div`
  flex: 1;
  width: 300px;
`;

// 메인 컨텐츠의 타이틀.
export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// 광고나 프로모션 컨텐츠를 표시하기 위한 배너 섹션.
export const AdBannerSection = styled.div`
  height: 90px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 100px;
`;

// 질문의 내용을 표시하기 위한 주요 섹션.
export const ContentSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

// 추천, 반대 및 북마크와 같은 동작 버튼을 위한 섹션.
export const ButtonSection = styled.div`
  width: 56.78px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-direction: column;
`;

// 질문의 상세 내용.
export const ContentDetail = styled.div`
  padding: 2rem;
  flex: 1;
`;

// 질문을 한 유저의 프로필을 표시하기 위한 섹션.
export const UserInfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

// 질문과 관련된 태그를 위한 섹션.
export const TagSection = styled.div`
  display: inline-flex;
  padding: 2px 6px 2px 0px;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 2rem;
`;

// 다른 스타일 컴포넌트 (이름에서 정확한 목적은 명확하지 않습니다).
export const S = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 76.77px;
`;

// 관련된 질문들을 표시하기 위한 섹션.
export const RelatedQuestionsSection = styled.div`
  margin-bottom: 20px;
`;

// 댓글이나 답변을 추가하기 위한 폼.
// const CommentSectionFrom = styled.div`
//   border: 2px solid #e0e0e0;
//   border-radius: 8px;
//   padding: 1rem;
//   margin-top: 1rem;
// `;

// 문단 스타일 컴포넌트.
export const P = styled.div`
  color: #232629;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.8px; /* 148.75% */

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// 블로그 항목을 위한 리스트 컨테이너 스타일.
export const BlogListBox = styled.div`
  border: 1px solid #f1e5bc;
  background-color: #fcf6e4;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  /* padding: 10px; */
`;

// 블로그 리스트 타이틀 및 리스트 자체를 포함하는 컨테이너.
export const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 1px;
  align-items: flex-start;
`;

// 블로그 리스트 섹션의 타이틀.
export const BlogTitle = styled.h2`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 24px;
  align-items: flex-start;

  border-radius: 4px 4px 0px 0px;
  border-top: 1px solid #f1e5bc;
  border-bottom: 1px solid #f1e5bc;
  background: #fbf3d5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  color: #525960;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.692px; /* 142.657% */
`;

// 타이틀을 제외한 메인 컨텐츠.
export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

// 두껍게 표시된 문단 스타일 컴포넌트.
export const P1 = styled.div`
  color: #232629;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: bolder;
  line-height: 24.7px; /* 145.294% */
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

// 레이아웃 헤더,사이드바
export const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Comment = styled.div`
  margin-left: 82px;
  margin-bottom: 2rem;
`;

// 타이틀을 위한 스타일 컴포넌트
export const TitleStyled = styled.div`
  color: #3b4045;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 36.45px; /* 145.8% */
`;
