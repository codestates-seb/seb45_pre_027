// 질문 상세보기 페이지
import styled from 'styled-components';
import LayoutWithFetchTitle from '../components/DescriptionComponents/TitleComponents/TitleComponent';
import BannerImg from '../components/DescriptionComponents/Banner/BannerComponents';
import QuestionContent from '../components/DescriptionComponents/QuestionContent/QuestionContentBox';
import UserInfoBox from '../components/DescriptionComponents/user_info/UserInfoBox';
import AddRelatedQuestionItem from '../components/DescriptionComponents/RelatedQuestions/RelatedQuestionItem';
import TextEditor from '../components/DescriptionComponents/TextEditor/TextEditorComponent';
import UpButton from '../components/DescriptionComponents/ButtonComponents/UpButton';
import { LinkButton } from '../components/DescriptionComponents/ButtonComponents/TagButton';
import DownButton from '../components/DescriptionComponents/ButtonComponents/DownButton';
import BookButton from '../components/DescriptionComponents/ButtonComponents/BookButton';
import AskButton from '../components/DescriptionComponents/ButtonComponents/AskButton';
import TheOverflowBlogList from '../components/DescriptionComponents/BlogItemList/BlogItem';
import Information from '../components/DescriptionComponents/TitleComponents/AskedModifideViewed';
import ResetButton from '../components/DescriptionComponents/ButtonComponents/Reset';
import ButtonList from '../components/DescriptionComponents/ButtonComponents/TextButton';

// 질문 설명 상자를 위한 스타일 컴포넌트
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  /* background-color: brown; */
`;

//TopContent
const TopContent = styled.div`
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
`;

// 페이지 전체 컨테이너 스타일
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  display: flex;
  width: 1100px;
  max-width: 1100px;
  /* background-color: aqua; */
  /* align-items: center; */
`;

// 메인 컨텐츠 영역 스타일
const MainContent = styled.div`
  flex: 3;
  margin-right: 20px;
  /* background-color: aquamarine; */
`;

// 사이드바 영역 스타일
const SideBar = styled.div`
  flex: 1;
  width: 300px;
`;

// 타이틀 섹션 스타일
const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 광고 배너 섹션 스타일
const AdBannerSection = styled.div`
  height: 90px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 100px;
`;

// 내용 섹션 스타일
const ContentSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

// 버튼 영역 스타일
const ButtonSection = styled.div`
  width: 56.78px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-direction: column;
`;

// 내용 상세 영역 스타일
const ContentDetail = styled.div`
  padding: 2rem;
  flex: 1;
`;

//유저 프로필 박스 영역
const UserInfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

//태그 영역

const TagSection = styled.div`
  display: inline-flex;
  padding: 2px 6px 2px 0px;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 2rem;
`;

// 관련 질문 섹션 스타일
const RelatedQuestionsSection = styled.div`
  margin-bottom: 20px;
`;

//댓글 입력 폼
const CommentSectionFrom = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

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

const S = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 76.77px;
`;

// 블로그 리스트 박스 스타일
const BlogListBox = styled.div`
  border: 1px solid #f1e5bc;
  background-color: #fcf6e4;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  /* padding: 10px; */
`;

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 1px;
  align-items: flex-start;
`;

const BlogTitle = styled.h2`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 24px;
  /* padding: 12px 183px 13.69px 15px; */
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
const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
`;
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

const samplePosts = [
  {
    id: 1,
    // title: 'Sample Post 1',
    link: '#',
    postedDate: 'today',
    updatedDate: 'today',
    viewCount: 100,
  },
  // ... 다른 게시물
];

// 블로그 리스트가 포함된 레이아웃
const LayoutWithBlogList = () => {
  return (
    <Container>
      <TopContent>
        {/*타이틀 영역*/}
        <TitleSection>
          <LayoutWithFetchTitle />
          <AskButton />
        </TitleSection>
        <Information posts={samplePosts} />
      </TopContent>
      <MiddleContent>
        <DescriptionBox>
          <MainContent>
            {/*베너 영역*/}
            <AdBannerSection>
              <BannerImg />
            </AdBannerSection>
            {/*질문 조회 영역*/}
            {/* 여기에 버튼을 삽입 */}
            <ContentSection>
              <ButtonSection>
                <UpButton />
                <p>0</p>
                <DownButton />
                <BookButton />
                <ResetButton />
              </ButtonSection>
              <ContentDetail>
                {/* 질문 내용 추가 영역 */}
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
            {/* 유저 프로필 영역 */}
            <UserInfoSection>
              <UserInfoBox />
            </UserInfoSection>
            <RelatedQuestionsSection>
              <AddRelatedQuestionItem />
            </RelatedQuestionsSection>
            <P>
              Know someone who can answer? Share a link to this question via
              email, Twitter, or Facebook.
            </P>
            <P1>Your Answer</P1>

            <TextEditor>
              <CommentSectionFrom>
                <QuestionContent />
              </CommentSectionFrom>
            </TextEditor>
          </MainContent>
          <SideBar>
            <BlogListContainer>
              <BlogTitle>The Overflow Blog</BlogTitle>
              <BlogListBox>
                <TheOverflowBlogList posts={blogPosts} />
              </BlogListBox>
            </BlogListContainer>
            <BlogListContainer>
              <BlogTitle>Featured on Meta</BlogTitle>
              <BlogListBox>
                <TheOverflowBlogList posts={MetaPosts} />
              </BlogListBox>
            </BlogListContainer>
          </SideBar>
        </DescriptionBox>
      </MiddleContent>
    </Container>
  );
};

export default LayoutWithBlogList;
