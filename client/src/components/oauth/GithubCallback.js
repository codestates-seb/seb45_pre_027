import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const GithubCallback = () => {
  const authUri = `BE와협의한 주소`;
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = async () => {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      console.log(authorizationCode); //인증 코드

      try {
        const response = await fetch(`${authUri}?code=${authorizationCode}`);
        const data = await response.json();

        localStorage.setItem('token', data.jwt);
        localStorage.setItem('ProfileURL', data.avatar_url);
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
