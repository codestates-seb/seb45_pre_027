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
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from './redux/tokenSlice';

function App() {
  const dispatch = useDispatch();
  // refresh_token이 있을 경우 refresh token으로 새롭게 access_token 발급
  useEffect(() => {
    const refresh_token = getCookieToken();

    const login = async () => {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/access-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: refresh_token,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRefreshToken(data.refresh_token);
          dispatch(SET_TOKEN(data.access_token));
        })
        .catch((e) => {
          console.log('failed get access token');
        });
    };
    if (refresh_token) {
      login();
    }
  }, []);
  return (
    <>
      {/* <Header />
      <SideBar /> */}
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route path="/log-out" element={<LogOut />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/question-description" element={<QuestionDescription />} />
        <Route path="/question-regist" element={<QuestionRegist />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="/oauth/github/callback" element={<GithabCallback />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
