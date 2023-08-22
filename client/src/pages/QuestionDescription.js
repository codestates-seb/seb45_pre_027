// 질문 상세보기 페이지
// 필요한 라이브러리와 컴포넌트를 가져옵니다.
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
import { CommentGetListTest } from '../components/DescriptionComponents/ListTest/CommentList';
import { QuestionCommentGetList } from '../components/DescriptionComponents/Answers/QuestionCommentGet';

import { useNavigate, useParams } from 'react-router';

import {
  BlogListBox,
  BlogListContainer,
  BlogTitle,
  ButtonSection,
  Container,
  Layout,
  TopContent,
  TitleSection,
  MiddleContent,
  DescriptionBox,
  MainContent,
  AdBannerSection,
  ContentSection,
  ContentDetail,
  S,
  TagSection,
  UserInfoSection,
  Comment,
  RelatedQuestionsSection,
  SideBarBox,
  P,
  TitleStyled,
} from './QuestionDescriptionStyle';

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

  const [title, setTitle] = useState('Loading...');
  console.log(title);
  const { id } = useParams();

  const navigate = useNavigate();

  const isLogIn = localStorage.getItem('log-in');

  useEffect(() => {
    if (!isLogIn) navigate('/log-in');
    // 백엔드 API 주소를 아래 URL에 설정합니다.

    fetch(`${process.env.REACT_APP_SERVER_URL}board/${id}`, {
      method: 'get',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
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
        setTitle(data?.board?.title); // 데이터에 'title' 필드가 있다고가정
        console.log(data?.board?.title);
      })
      .catch((error) => {
        console.error(
          'There was a problem with the fetch operation:',
          error.message,
        );
      });
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  // const isLogIn = true;

  return (
    <div>
      {isLogIn ? (
        <>
          <Layout>
            <Container>
              <TopContent>
                <TitleSection>
                  {/* 타이틀 정보 */}
                  <TitleStyled>
                    <div dangerouslySetInnerHTML={{ __html: title }} />
                  </TitleStyled>
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
                        {/* 질문 정보 */}

                        <QuestionContent>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data?.board?.content,
                            }}
                          />
                        </QuestionContent>
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
                      Know someone who can answer? Share a link to this question
                      via email, Twitter, or Facebook.
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
        </>
      ) : null}
    </div>
  );
};

// 메인 컴포넌트를 내보냅니다.
export default LayoutWithBlogList;
