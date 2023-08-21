import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../redux/tokenSlice';
import { useDispatch } from 'react-redux';

const GithubCallback = () => {
  const authUri = `BE와협의한 주소`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const getToken = async () => {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      console.log(authorizationCode); //인증 코드
      try {
        await fetch(`${authUri}?code=${authorizationCode}`).then((res) => {
          // 리프레쉬 토큰 쿠키에 저장
          setRefreshToken(res.refresh_token);
          // 액세스 토큰 저장
          const access_token = res.headers.get('Authorization');
          if (!access_token) return console.log('Log-in has failed');
          dispatch(SET_TOKEN(access_token));
        });

        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, []);

  return <div>Loading...</div>;
};

export default GithubCallback;
