import React from "react";
import styled from "styled-components";

// CSS 코드입니다.

// Sidebar에 전체적으로 적용할 CSS
const StyledSidebar = styled.div`
  font-size: 13px;
  padding: 2rem 4rem;
  width: 80px;
  border-right: 1px solid gray;
`;

const SidebarContianer = styled.div`
  gap: 10px;
`;

const SidebarNavi = styled.div``;

const SidebarTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title1 = styled.div``;

const Title2 = styled.div``;

const Title2Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 10px 30px;
  font-size: 14px;
`;

const Title3 = styled.div``;

const Title4 = styled.div``;

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
            <Title3>COLLECTIVES</Title3>
            <Title4>TEAMS</Title4>
          </SidebarTitles>
        </SidebarNavi>
      </SidebarContianer>
    </StyledSidebar>
  );
};
export default SideBar;
