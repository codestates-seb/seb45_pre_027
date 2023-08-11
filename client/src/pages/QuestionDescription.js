// 질문 상세보기 페이지
import styled from 'styled-components';
import LayoutWithFetchTitle from '../components/DescriptionComponents/TitleComponents/TitleComponent';
import BannerImg from '../components/DescriptionComponents/Banner/BannerComponents';
import QuestionContent from '../components/DescriptionComponents/QuestionContent/QuestionContentBox';
import UserInfoBox from '../components/DescriptionComponents/user_info/UserInfoBox';
import AddRelatedQuestionItem from '../components/DescriptionComponents/RelatedQuestions/RelatedQuestionItem';

// 질문 설명 상자를 위한 스타일 컴포넌트
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
`;

//TopContent
const TopContent = styled.div`
  flex: 1;
  margin-right: 20px;
`;

//타이틀 하단 조회수 , 게시 시점 , 조회수

// 페이지 전체 컨테이너 스타일
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// 메인 컨텐츠 영역 스타일
const MainContent = styled.div`
  flex: 3;
  margin-right: 20px;
`;

// 사이드바 영역 스타일
const SideBar = styled.div`
  flex: 1;
`;

// 타이틀 섹션 스타일
const TitleSection = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 광고 배너 섹션 스타일
const AdBannerSection = styled.div`
  background-color: #e0e0e0;
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
`;

// 내용 상세 영역 스타일
const ContentDetail = styled.div`
  background-color: aliceblue;
  padding: 2rem;
  flex: 1;
`;

//유저 프로필 박스 영역
const UserInfoSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

// 관련 질문 섹션 스타일
const RelatedQuestionsSection = styled.div`
  margin-bottom: 20px;
`;

// 댓글 섹션 스타일
const CommentSection = styled.div`
  margin-bottom: 20px;
`;

//댓글 입력 폼

const CommentSectionFrom = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

// 블로그 리스트 박스 스타일
const BlogListBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 10px;
`;

// 블로그 항목 스타일
const BlogListItem = styled.div`
  margin-bottom: 10px;
`;

// 블로그 리스트가 포함된 레이아웃
const LayoutWithBlogList = () => {
  return (
    <Container>
      <TopContent>
        {/*타이틀 영역*/}
        <TitleSection>
          <LayoutWithFetchTitle />
        </TitleSection>
        {/*베너 영역*/}
        <AdBannerSection>
          <BannerImg />
        </AdBannerSection>
      </TopContent>

      <DescriptionBox>
        <MainContent>
          {/*질문 조회 영역*/}
          <ContentSection>
            <ButtonSection>
              {/* 여기에 버튼을 삽입 */}
              <button>Button</button>
            </ButtonSection>
            <ContentDetail>
              {/* 질문 내용 추가 영역 */}
              <QuestionContent />
            </ContentDetail>
          </ContentSection>
          {/* 유저 프로필 영역 */}
          <UserInfoSection>
            <UserInfoBox />
          </UserInfoSection>
          <RelatedQuestionsSection>
            <AddRelatedQuestionItem />
          </RelatedQuestionsSection>
          <CommentSection>
            Know someone who can answer? Share a link to this question via
            email, Twitter, or Facebook. Your Answer
            <CommentSectionFrom>
              <QuestionContent />
            </CommentSectionFrom>
          </CommentSection>
        </MainContent>
        <SideBar>
          <BlogListBox>
            <BlogListItem>Blog Post 1</BlogListItem>
            <BlogListItem>Blog Post 2</BlogListItem>
            <BlogListItem>Blog Post 3</BlogListItem>
            <BlogListItem>Blog Post 4</BlogListItem>
          </BlogListBox>
        </SideBar>
      </DescriptionBox>
    </Container>
  );
};

export default LayoutWithBlogList;
