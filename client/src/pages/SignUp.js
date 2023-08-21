import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import tag from '../img/tag-icon.svg';
import question from '../img/question-icon.svg';
import trophy from '../img/trophy-icon.svg';
import up from '../img/up-icon.svg';
import SocialButton from '../components/login-components/SocialButton';
import SmallLogo from '../components/login-components/SmallLogo';
import facebookLogo from '../img/facebook-logo.svg';
import googleLogo from '../img/google-logo.svg';
import githubLogo from '../img/github-logo.svg';
import SignUpForm from '../components/signUp-components/SignUpForm';
import { BiLinkExternal } from 'react-icons/bi';

// 회원가입 페이지
const Container = styled.div`
  display: flex;
  max-width: 1920px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  background-color: rgba(241, 242, 243, 1);
`;

const InnerContainer = styled.div`
  width: 785.33px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 421.33px;
  flex-shrink: 0;

  h2 {
    color: #232629;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 108% */
  }
`;

const LineContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 8px;

  div {
    display: flex;
    padding-bottom: 0px;
    justify-content: center;
    align-items: flex-start;

    img {
      width: 26px;
      height: 26px;
    }
  }

  span {
    color: #232629;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.615px; /* 140.11% */
  }
`;

const HelperContainer = styled.div`
  padding-top: 24px;
  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  a {
    color: #0074cc;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    list-style: none;
    text-decoration: none;
  }
`;

const RightContainer = styled.div`
  width: 316px;
  flex-shrink: 0;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 8px;
  padding-bottom: 20px;
`;

const BottomContainer = styled.div`
  margin-top: 23px;
  padding: 16px;
  color: #232629;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  display: flex;
  flex-direction: column;
  gap: 12px;
  a {
    color: #0074cc;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    text-decoration: none;
  }
`;

function SignUp() {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <h2>Join the Stack Overflow community</h2>
          <LineContainer>
            <div>
              <img src={question} alt="question"></img>{' '}
            </div>
            <span>Get unstuck — ask a question</span>
          </LineContainer>
          <LineContainer>
            <div>
              <img src={up} alt="up"></img>{' '}
            </div>
            <span>Unlock new privileges like voting and commenting</span>
          </LineContainer>
          <LineContainer>
            <div>
              <img src={tag} alt="tag"></img>{' '}
            </div>
            <span>
              Save your favorite questions, answers, watch tags, and more
            </span>
          </LineContainer>
          <LineContainer>
            <div>
              <img src={trophy} alt="trophy"></img>{' '}
            </div>
            <span>Earn reputation and badges</span>
          </LineContainer>
          <HelperContainer>
            <p>
              Collaborate and share knowledge with a private group for FREE.
            </p>
            <a href="#">
              Get Stack Overflow for Teams free for up to 50 users.
            </a>
          </HelperContainer>
        </LeftContainer>
        <RightContainer>
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
          <SignUpForm />
          <BottomContainer>
            <div>
              Already have an account? <Link to="/log-in">Log in</Link>
            </div>
            <div>
              Are you an employer?{' '}
              <a href="#">
                Sign up on Talent <BiLinkExternal />
              </a>
            </div>
          </BottomContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}

export default SignUp;
