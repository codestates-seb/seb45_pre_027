import React from 'react';
import styled from 'styled-components';
import QuestionList from '../pages/QuestionList';

// CSS 코드입니다.

// Sidebar에 전체적으로 적용할 CSS
const StyledSidebar = styled.div`
  font-size: 14px;
  color: gray;
  /* padding: 2rem, 4rem; */
  width: 164px;

  border-right: 1px solid gray;
  margin-left: 20px;
  /* margin-top: 30px; */
  /* padding: 0px, 0px, 1643px, 0px; */
`;

const SidebarContianer = styled.div`
  /* width: 164px; */
  padding: 0;
  margin-top: 30px;
`;

const SidebarNavi = styled.div``;

const SidebarTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title1 = styled.div``;

const Title2 = styled.div`
  cursor: pointer;
`;

const Title2Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 10px 30px;
  font-size: 14px;
`;

const SideBar = () => {
  return (
    <StyledSidebar>
      <SidebarContianer>
        <SidebarNavi>
          <SidebarTitles>
            <Title1>Home</Title1>
            <Title2>
              PUBLIC
              <Title2Contents>
                <div href="/questions">Questions</div>
                <div href="/tags">Tags</div>
                <div href="/users">Users</div>
                <div href="/companies">Companies</div>
              </Title2Contents>
            </Title2>
          </SidebarTitles>
        </SidebarNavi>
      </SidebarContianer>
    </StyledSidebar>
  );
};
export default SideBar;
