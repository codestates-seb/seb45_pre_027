import React from 'react';
import { styled } from 'styled-components';
import profile from '../img/default-profile.png';
import { FaBirthdayCake, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import About from '../components/myInfo-components/About';
import Badges from '../components/myInfo-components/Badges';
import Posts from '../components/myInfo-components/Posts';

const Container = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  padding: 8px;
  margin-bottom: 8px;
  gap: 16px;
  img {
    height: 96px;
    border-radius: 6px;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #232629;
    font-family: Inter;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
  }
`;

const DateContent = styled.ul`
  display: flex;
  li {
    display: flex;
    align-items: end;
    margin: 4px;
  }
  svg {
    fill: #9199a1;
    height: 80%;
    flex-shrink: 0;
  }
  span {
    margin: 0 4px;
    color: #6a737c;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

const CategoryBox = styled.div`
  padding: 2px 8px;
  display: flex;
  align-items: center;
  gap: 0px 4px;
  flex-wrap: wrap;
  color: rgba(82, 89, 96, 1);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;

  margin-bottom: 4px;

  span {
    padding: 6px 13.17px 6px 12px;
  }

  .category-active {
    background-color: #f48225;
    padding: 6px 12px;
    border-radius: 100px;
    color: white;
  }
`;

const ContentBox = styled.div`
  padding: 12px;
  display: flex;
  gap: 24px;
  border: 1px solid blue;
`;

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StatBox = styled.div`
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  max-width: 230px;

  display: grid;
  grid-template-areas:
    'a b'
    'c d';
  > div {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    color: #6a737c;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;

    > div {
      color: #0c0d0e;
      font-family: Inter;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

const ContentRight = styled.div`
  flex: 3;
  display: grid;
  gap: 1.5rem;
`;

function MyInfo() {
  return (
    <Container>
      <Header>
        <img src={profile} alt="profile"></img>
        <ProfileContent>
          <h2>binchoi</h2>
          <DateContent>
            <li>
              <FaBirthdayCake />
              <span>Member for 12 days</span>
            </li>
            <li>
              <FaRegClock />
              <span>Last seen this week</span>
            </li>
            <li>
              <FaRegCalendarAlt />
              <span>Visited 6 days</span>
            </li>
          </DateContent>
        </ProfileContent>
      </Header>
      <CategoryBox>
        <span className="category-active">Profile</span>
        <span>Activity</span>
      </CategoryBox>
      <ContentBox>
        <ContentLeft>
          <h3>Stats</h3>
          <StatBox>
            <div className="reputation">
              <div>1</div>
              reputaion
            </div>
            <div className="reached">
              <div>0</div>
              reached
            </div>
            <div className="answers">
              <div>0</div>
              answers
            </div>
            <div className="questions">
              <div>0</div>
              questions
            </div>
          </StatBox>
        </ContentLeft>
        <ContentRight>
          <About />
          <Badges />
          <Posts />
        </ContentRight>
      </ContentBox>
    </Container>
  );
}

export default MyInfo;
