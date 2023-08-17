// 댓글

import styled from 'styled-components';
import BookButton from '../ButtonComponents/BookButton';
import ResetButton from '../ButtonComponents/Reset';
import CounterButton from '../ButtonCNP/UpDownButtonCounter';
import AnswerContent from './AnswerContentBox';
// import QuestionContent from '../QuestionContent/QuestionContentBox';

// 질문의 내용을 표시하기 위한 주요 섹션.
const ContentSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: aqua;
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

// 동작 버튼 그룹.
const ButtonGroup = () => (
  <ButtonSection>
    <CounterButton />
    <BookButton />
    <ResetButton />
  </ButtonSection>
);

export const QuestionCommentGet = () => (
  <ContentSection>
    <ButtonGroup />
    <ContentDetail>
      {/* <QuestionContent /> */}
      <AnswerContent />
    </ContentDetail>
  </ContentSection>
);
