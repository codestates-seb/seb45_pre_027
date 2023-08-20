import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import profile from '../img/default-profile.png';
import {
  FaBirthdayCake,
  FaRegClock,
  FaRegCalendarAlt,
  FaPen,
} from 'react-icons/fa';
import About from '../components/myInfo-components/About';
import Badges from '../components/myInfo-components/Badges';
import Posts from '../components/myInfo-components/Posts';
import ToBe from '../components/myInfo-components/ToBe';
import Setting from '../components/myInfo-components/Setting';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/userInfoSlice';
import { useNavigate } from 'react-router';

const Container = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  position: relative;
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

const EditProfileButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  top: 0;
  padding: 9px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid rgb(186, 191, 196);

  color: hsl(210, 8%, 25%);
  font-size: 0.9rem;

  cursor: pointer;

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
  }

  &:active {
    background-color: hsl(210, 8%, 95%);
  }

  svg {
    margin-right: 0.3rem;
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

  button {
    padding: 6px 13.17px 6px 12px;
    border: none;
    border-radius: 100px;
    background: none;
    cursor: pointer;

    &:hover {
      background-color: hsl(206, 100%, 97%);
    }
  }

  .category-active {
    background-color: #f48225;
    padding: 6px 12px;
    border-radius: 100px;
    color: white;
    &:hover {
      background-color: #ea8225;
    }
  }
`;

const ContentBox = styled.div`
  padding: 12px;
  display: flex;
  gap: 24px;
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
  const [categoryIdx, setCategoryIdx] = useState(0);
  const category = ['Profile', 'Activity', 'Settings'];

  const userInfo = useSelector((state) => state.userInfo);
  const userId = localStorage.getItem('user_id');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authToken);
  const navigate = useNavigate();
  useEffect(() => {
    // 토큰이 없으면 로그인 창 이동
    // if (!token.authenticated) {
    //   return navigate('/log-in');
    // }
    const getUserInfo = async () => {
      // TODO: userId 가져오는 방법 서버랑 상의
      await fetch(`${process.env.REACT_APP_SERVER_URL}/members/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token: token.accessToken,
        },
      })
        .then((res) => res.json())
        .then((data) => dispatch(setUserInfo(data)));
    };
    if (userId) getUserInfo();
    else dispatch(setUserInfo({ profile, name: 'binchoi' }));
  }, []);

  const handleCategory = (idx) => {
    setCategoryIdx(idx);
  };
  return (
    <Container>
      <Header>
        <img src={userInfo.profile} alt="profile"></img>
        <ProfileContent>
          <h2>{userInfo.name}</h2>
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
          <EditProfileButton onClick={() => handleCategory(2)}>
            <FaPen />
            Edit profile
          </EditProfileButton>
        </ProfileContent>
      </Header>
      <CategoryBox>
        {category.map((ele, idx) =>
          idx === categoryIdx ? (
            <button
              key={idx}
              className="category-active"
              onClick={() => handleCategory(idx)}
            >
              {ele}
            </button>
          ) : (
            <button key={idx} onClick={() => handleCategory(idx)}>
              {ele}
            </button>
          ),
        )}
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
          {categoryIdx === 0 ? (
            <>
              <About handleCategory={handleCategory} />
              <Badges />
              <Posts />
            </>
          ) : categoryIdx === 2 ? (
            <Setting handleCategory={handleCategory} />
          ) : (
            <ToBe />
          )}
        </ContentRight>
      </ContentBox>
    </Container>
  );
}

export default MyInfo;
