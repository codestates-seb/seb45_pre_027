import React from 'react';
import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Login from './pages/Login';
import LogOut from './pages/LogOut';
import QuestionDescription from './pages/QuestionDescription';
import QuestionList from './pages/QuestionList';
import QuestionRegist from './pages/QuestionRegist';
import SignUp from './pages/SignUp';
import GithabCallback from './components/oauth/GithubCallback';
import MyInfo from './pages/MyInfo';
import { useEffect } from 'react';
import { getCookieToken, setRefreshToken } from './storage/Cookie';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TOKEN } from './redux/tokenSlice';
import { setIsLogin } from './redux/loginSlice';
import QuestionEdit from './pages/QuestionEdit';

const Test = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const dispatch = useDispatch();
  const refresh_token = getCookieToken();
  const access = useSelector((state) => state.authToken);
  console.log(access);
  // 리프레쉬 토큰이 있을 경우 새로고침 때마다 리프레쉬 토큰을 사용하여 서버로부터 액세스 토큰을 가져온다.
  useEffect(() => {
    // 자동 로그인 설정이 되어있으면 바로 로그인
    // if (localStorage.getItem('autoLogIn')) {
    //   dispatch(setIsLogin(true));
    //   return;
    // }

    // access_token이 없고 refresh_token이 있을 경우 refresh token으로 새롭게 access_token 발급
    const login = async () => {
      console.log('login');
      await fetch(`${process.env.REACT_APP_SERVER_URL}/access-token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          refresh_token: getCookieToken(),
        },
      })
        .then((res) => {
          // 리프레쉬 토큰 쿠키에 저장
          setRefreshToken(res.refresh_token);
          // 액세스 토큰 저장
          const access_token = res.headers.get('Authorization');
          if (!access_token) return console.log('Log-in has failed at root');
          dispatch(SET_TOKEN(access_token));
        })
        .catch((e) => {
          console.log('failed get access token at root');
        });
    };
    // 리프레쉬 토큰이 있고 액세스 토큰이 없는 경우 액세스 토큰 요청
    if (refresh_token !== undefined && access.authenticated) {
      login();
    }
  }, []);

  return (
    <>
      <Header />
      <Test>
        <SideBar />
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/log-out" element={<LogOut />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/questions" element={<QuestionList />} />
          <Route
            path="/question-description/:id"
            element={<QuestionDescription />}
          />
          <Route path="/question-regist" element={<QuestionRegist />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/oauth/github/callback" element={<GithabCallback />} />
          <Route path="/question-edit" element={<QuestionEdit />} />
        </Routes>
      </Test>
      <Footer />
    </>
  );
}

export default App;
