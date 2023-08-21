// 질문 상세보기 페이지
// 필요한 라이브러리와 컴포넌트를 가져옵니다.
import styled from 'styled-components';
import LayoutWithFetchTitle from '../components/DescriptionComponents/TitleComponents/TitleComponent';
import BannerImg from '../components/DescriptionComponents/Banner/BannerComponents';
import QuestionContent from '../components/DescriptionComponents/QuestionContent/QuestionContentBox';
import UserInfoBox from '../components/DescriptionComponents/user_info/UserInfoBox';
import AddRelatedQuestionItem from '../components/DescriptionComponents/RelatedQuestions/RelatedQuestionItem';
import { LinkButton } from '../components/DescriptionComponents/ButtonComponents/TagButton';
import BookButton from '../components/DescriptionComponents/ButtonComponents/BookButton';
import AskButton from '../components/DescriptionComponents/ButtonComponents/AskButton';
import TheOverflowBlogList from '../components/DescriptionComponents/BlogItemList/BlogItem';
import Information from '../components/DescriptionComponents/TitleComponents/AskedModifideViewed';
import ResetButton from '../components/DescriptionComponents/ButtonComponents/Reset';
import ButtonList from '../components/DescriptionComponents/ButtonComponents/TextButton';
import AnswerCountBox from '../components/DescriptionComponents/Answers/AnswersCountBox';
import QuestionComment from '../components/DescriptionComponents/Answers/QuestionCommentPost';
import { useState, useEffect } from 'react';
import CounterButton from '../components/DescriptionComponents/ButtonCNP/UpDownButtonCounter';
import { CommentBUT } from '../components/DescriptionComponents/ButtonComponents/AddComment';
import { QuestionCommentGetListTest } from '../components/DescriptionComponents/ListTest/QuestionCommentGetList';
import { CommentGetListTest } from '../components/DescriptionComponents/ListTest/CommentList';
import { QuestionCommentGetList } from '../components/DescriptionComponents/Answers/QuestionCommentGet';

// 질문 상세 페이지를 위한 주 컨테이너 스타일링.

const Container = styled.div`
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
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

// 메인 타이틀과 추가 정보를 포함하는 상단 컨텐츠.
const TopContent = styled.div`
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
`;

// 질문, 설명 및 관련 작업을 포함하는 메인 컨텐츠.
const MainContent = styled.div`
  flex: 3;
  margin-right: 20px;
  /* background-color: aquamarine; */
`;

// 블로그 리스트와 같은 추가 컨텐츠를 위한 사이드바.
const SideBarBox = styled.div`
  flex: 1;
  width: 300px;
`;

// 메인 컨텐츠의 타이틀.
const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// 광고나 프로모션 컨텐츠를 표시하기 위한 배너 섹션.
const AdBannerSection = styled.div`
  height: 90px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 100px;
`;

// 질문의 내용을 표시하기 위한 주요 섹션.
const ContentSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

// 추천, 반대 및 북마크와 같은 동작 버튼을 위한 섹션.
const ButtonSection = styled.div`
  width: 56.78px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-direction: column;
`;

// 질문의 상세 내용.
const ContentDetail = styled.div`
  padding: 2rem;
  flex: 1;
`;

// 질문을 한 유저의 프로필을 표시하기 위한 섹션.
const UserInfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

// 질문과 관련된 태그를 위한 섹션.
const TagSection = styled.div`
  display: inline-flex;
  padding: 2px 6px 2px 0px;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 2rem;
`;

// 관련된 질문들을 표시하기 위한 섹션.
const RelatedQuestionsSection = styled.div`
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
const P = styled.div`
  color: #232629;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.8px; /* 148.75% */

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// 다른 스타일 컴포넌트 (이름에서 정확한 목적은 명확하지 않습니다).
const S = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 76.77px;
`;

// 블로그 항목을 위한 리스트 컨테이너 스타일.
const BlogListBox = styled.div`
  border: 1px solid #f1e5bc;
  background-color: #fcf6e4;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  /* padding: 10px; */
`;

// 블로그 리스트 타이틀 및 리스트 자체를 포함하는 컨테이너.
const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 1px;
  align-items: flex-start;
`;

// 블로그 리스트 섹션의 타이틀.
const BlogTitle = styled.h2`
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
const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

// 두껍게 표시된 문단 스타일 컴포넌트.
const P1 = styled.div`
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
const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const Comment = styled.div`
  margin-left: 82px;
  margin-bottom: 2rem;
`;

// 블로그 게시물의 샘플 데이터.
const blogPosts = [
  {
    id: 1,
    title: 'How engineering teams at a large org can move at startup speed',
    link: '#',
  },
  {
    id: 2,
    title: 'The fine line between product and engineering (Ep. 596)',
    link: '#',
  },
  // ... 추가 포스트
];

// 메타 게시물의 샘플 데이터.
const MetaPosts = [
  {
    id: 1,
    title: 'Moderation strike: Results of negotiations',
    link: '#',
  },
  {
    id: 2,
    title:
      'Our Design Vision for Stack Overflow and the Stack Exchange network',
    link: '#',
  },
  // ... 추가 포스트
];

// 메인 컨텐츠의 추가 정보를 위한 샘플 데이터.
const samplePosts = [
  {
    id: 1,
    // title: 'Sample Post 1',
    link: '#',
    postedDate: 'today',
    updatedDate: 'today',
    viewCount: 100,
  },
];

// 블로그 리스트를 렌더링하기 위한 재사용 가능한 컴포넌트.

const BlogList = ({ title, posts }) => (
  <BlogListContainer>
    <BlogTitle>{title}</BlogTitle>
    <BlogListBox>
      <TheOverflowBlogList posts={posts} />
    </BlogListBox>
  </BlogListContainer>
);

// 동작 버튼 그룹.
const ButtonGroup = () => (
  <ButtonSection>
    <CounterButton />
    <BookButton />
    <ResetButton />
  </ButtonSection>
);

// 질문 상세 페이지를 렌더링하기 위한 메인 컴포넌트.
const LayoutWithBlogList = () => {
  const [data, setData] = useState('Loading...');
  useEffect(() => {
    // 백엔드 API 주소를 아래 URL에 설정합니다.

    fetch(`${process.env.REACT_APP_SERVER_URL}board/1`, {
      method: 'get',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error(
          'There was a problem with the fetch operation:',
          error.message,
        );
      });
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  return (
    <div>
      {/* <Header /> */}

      <Layout>
        {/* <SideBar /> */}

        <Container>
          <TopContent>
            <TitleSection>
              <LayoutWithFetchTitle />
              <AskButton />
            </TitleSection>
            <Information posts={samplePosts} />
          </TopContent>
          <MiddleContent>
            <DescriptionBox>
              <MainContent>
                <AdBannerSection>
                  <BannerImg />
                </AdBannerSection>
                <ContentSection>
                  <ButtonGroup />
                  <ContentDetail>
                    <QuestionContent />
                  </ContentDetail>
                </ContentSection>
                <S>
                  <TagSection>
                    <LinkButton>uikit</LinkButton>
                    <LinkButton>sun do manager</LinkButton>
                    <LinkButton>uikit</LinkButton>
                    <LinkButton>uikit</LinkButton>
                  </TagSection>
                  <ButtonList />
                </S>

                <UserInfoSection>
                  <UserInfoBox />
                </UserInfoSection>
                <Comment>
                  {data ? (
                    <CommentGetListTest>
                      {data?.data?.content}
                    </CommentGetListTest>
                  ) : (
                    ''
                  )}
                  <CommentBUT />
                </Comment>
                <RelatedQuestionsSection>
                  <AddRelatedQuestionItem />
                </RelatedQuestionsSection>
                <P>
                  Know someone who can answer? Share a link to this question via
                  email, Twitter, or Facebook.
                </P>
                <AnswerCountBox />
                {data ? (
                  <QuestionCommentGetList>
                    {data?.data?.content}
                  </QuestionCommentGetList>
                ) : (
                  ''
                )}
                {/* <P1>Your Answer</P1> */}
                <QuestionComment />
              </MainContent>
              <SideBarBox>
                <BlogList title="The Overflow Blog" posts={blogPosts} />
                <BlogList title="Featured on Meta" posts={MetaPosts} />
              </SideBarBox>
            </DescriptionBox>
          </MiddleContent>
        </Container>
      </Layout>
    </div>
  );
};

// 메인 컴포넌트를 내보냅니다.
export default LayoutWithBlogList;
