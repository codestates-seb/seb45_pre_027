// 질문 상세보기 페이지
import styled from 'styled-components';
import LayoutWithFetchTitle from '../components/DescriptionComponents/TitleComponents/TitleComponent';
import BannerImg from '../components/DescriptionComponents/Banner/BannerComponents';

// 질문 설명 상자를 위한 스타일 컴포넌트
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

// 페이지 전체 컨테이너 스타일
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
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
  flex: 1;
`;

// 관련 질문 섹션 스타일
const RelatedQuestionsSection = styled.div`
  margin-bottom: 20px;
`;

// 댓글 섹션 스타일
const CommentSection = styled.div`
  margin-bottom: 20px;
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
      <MainContent>
        <LayoutWithFetchTitle />

        <AdBannerSection>
          <BannerImg />
        </AdBannerSection>

        <ContentSection>
          <ButtonSection>
            {/* 여기에 버튼을 삽입 */}
            <button>Button</button>
          </ButtonSection>
          <ContentDetail>Question Content</ContentDetail>
        </ContentSection>

        <RelatedQuestionsSection>Related Questions</RelatedQuestionsSection>

        <CommentSection>Comment Box</CommentSection>
      </MainContent>

      <SideBar>
        <BlogListBox>
          <BlogListItem>Blog Post 1</BlogListItem>
          <BlogListItem>Blog Post 2</BlogListItem>
          <BlogListItem>Blog Post 3</BlogListItem>
          <BlogListItem>Blog Post 4</BlogListItem>
        </BlogListBox>
      </SideBar>
    </Container>
  );
};

export default LayoutWithBlogList;
