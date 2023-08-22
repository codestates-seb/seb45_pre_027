import styled from 'styled-components';
import SmallLogo from '../components/login-components/SmallLogo';
import logo from '../img/small-logo.svg';
import facebookLogo from '../img/facebook-logo.svg';
import googleLogo from '../img/google-logo.svg';
import githubLogo from '../img/github-logo.svg';
import LoginForm from '../components/login-components/LoginForm';
import SocialButton from '../components/login-components/SocialButton';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #f1f2f3;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 570.53px;
`;

const Logo = styled.img`
  width: 32px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 8px;
  padding-bottom: 20px;
`;

const HelperContainer = styled.div`
  display: inline-flex;
  max-width: 316px;
  margin-top: 1.5rem;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #232629;
  text-align: center;
  font-family: Inter;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
  a {
    display: inline-flex;
    align-items: center;
    padding-left: 0.5rem;
    color: hsl(206, 100%, 40%);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
    &:visited {
      color: hsl(209, 100%, 32%);
    }

    svg {
      margin-left: 0.1rem;
    }
  }
`;

// 로그인 페이지
function Login() {
  const handleGithubLogin = (e) => {
    const uri = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_REDIRECT_URI}`;
    console.log(e);
    window.location.href = uri;
  };
  return (
    <Container>
      <InnerContainer>
        <Logo src={logo} alt="small-logo" />
        <ButtonContainer>
          <SocialButton
            color="#3B4045"
            background="#FFF"
            bordercolor="#d6d9dc"
            hovercolor="hsl(210, 8%, 97.5%)"
            activecolor="hsl(210,8%,95%)"
          >
            <SmallLogo logo={googleLogo} />
            <span>Log In with Google</span>
          </SocialButton>
          <SocialButton
            color="#FFF"
            background="#2F3337"
            bordercolor="hsl(210,8%,85%)"
            hovercolor="hsl(210,8%,15%)"
            activecolor="hsl(210,8%,5%)"
            onClick={(e) => handleGithubLogin(e)}
          >
            <SmallLogo logo={githubLogo} />
            <span>Log In with GitHub</span>
          </SocialButton>
          <SocialButton
            color="#FFF"
            background="#385499"
            bordercolor="hsl(206,93%,83.5%)"
            hovercolor="#314a86"
            activecolor="#2a4074"
            disabled
          >
            <SmallLogo logo={facebookLogo} />
            <span>Log In with Facebook</span>
          </SocialButton>
        </ButtonContainer>
        <LoginForm />
        <HelperContainer>
          <span>
            Don't have an account?<Link to="/sign-up">Sign up</Link>
          </span>
          <span>
            Are you an employer?
            <a>
              Sign up on Talent <BiLinkExternal />
            </a>
          </span>
        </HelperContainer>
      </InnerContainer>
    </Container>
  );
}

export default Login;
