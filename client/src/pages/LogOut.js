import { styled } from 'styled-components';
import SocialButton from '../components/login-components/SocialButton';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { DELETE_TOKEN } from '../redux/tokenSlice';
import { getCookieToken, removeCookieToken } from '../storage/Cookie';

// 로그아웃 페이지
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  button {
    padding: 1rem;
    font-size: 1rem;
  }
`;
function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Cookie에 저장된 Refresh Token 정보를 받아 온다.
  const refreshToken = getCookieToken();
  const handleLogOut = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //  redux에 저장된 access token 정보 삭제
        dispatch(DELETE_TOKEN());
        // cookie에 저장된 refresh token 정보 삭제
        removeCookieToken();
        // 자동 로그인 설정 해제
        localStorage.clear();
        // 메인으로 페이지 이동
        return navigate('/');
      })
      .catch((e) => {
        window.location.reload();
      });
  };
  return (
    <Container>
      <h2>Are you sure you want to log-out?</h2>
      <ButtonContainer>
        <SocialButton
          color="#FFF"
          background="#0A95FF"
          bordercolor="hsl(206,96%,90%)"
          hovercolor="hsl(206,100%,40%)"
          activecolor="hsl(209,100%,37.5%)"
          onClick={() => handleLogOut()}
        >
          Log-out
        </SocialButton>
        <SocialButton
          color="#FFF"
          background="#303134"
          bordercolor="hsl(210,8%,85%)"
          hovercolor="#211134"
          activecolor="hsl(210,8%,5%)"
          onClick={() => navigate(-1)}
        >
          Cancel
        </SocialButton>
      </ButtonContainer>
    </Container>
  );
}

export default LogOut;
