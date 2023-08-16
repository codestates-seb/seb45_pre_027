import { styled } from 'styled-components';
import SocialButton from './SocialButton';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../../redux/loginSlice';
import { setUserInfo } from '../../redux/userInfoSlice';
import { setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../redux/tokenSlice';

const Container = styled.div`
  display: inline-flex;
  max-width: 290px;
  padding: 18px 24px;
  align-items: flex-start;
  border-radius: 8px;
  background: #fff;
  box-shadow:
    0px 1px 4px 0px rgba(0, 0, 0, 0.1),
    0px 20px 48px 0px rgba(0, 0, 0, 0.05),
    0px 10px 24px 0px rgba(0, 0, 0, 0.05);
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 6px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  div {
    width: 100%;
  }
  label {
    display: flex;
    padding: 0px 226px 4px 2px;
    align-items: flex-start;
    color: rgba(12, 13, 14, 1);
    color: #0c0d0e;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
  }
  input {
    padding: 0.6em 0.7em;
    width: 240px;
    height: 32.59px;
    border-radius: 6px;
    border: 1px solid #babfc4;
    background: #fff;
    font-weight: 300;

    &:focus {
      outline: none;
      border-color: hsl(206, 90%, 69.5%);
      box-shadow: 0px 0px 5px 1px hsl(206, 90%, 69.5%);
    }
  }
`;
const ErrorContainer = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  color: red;
  text-align: center;
  font-size: 0.7rem;
`;
const LoginButton = styled(SocialButton)`
  margin-top: 10px;
  width: 240px;
`;

function LoginForm() {
  const isLogin = useSelector((state) => state.isLogin.value);
  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMsg, setErrorMsg] = useState('');
  const handleLogin = async (data) => {
    // 입력값 초기화
    setValue('password', '');

    // jwt 로그인 방식
    // 1. 프론트에서 로그인 시도
    // 2. 유저 정보가 올바르다면 백에서 access_token, refresh_token 발급
    // 3. refresh_token, access_token을 클라이언트에 저장하고 refresh token을
    // 서버에 보내면 그때마다 새로운 access token을 발급
    // 4. access token을 서버에 보내면 서버는 토큰이 유효한지 확인한다.
    /*
      Access Token: 실질적인 인증을 위한 JWT, 유효기간이 짧다.
      Refresh Token: Access Token의 짧은 유효기간을 보완하기 위해 사용되며, 본 토큰을 사용해 access token 만료 시 재발급
    */

    await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefreshToken(data.refresh_token);
        dispatch(SET_TOKEN(data.access_token));
        // 메인으로 페이지 이동
        return navigate('/');
      })
      .catch((e) => {
        setErrorMsg('Log-in has failed');
      });

    // 세션 로그인 방식
    // await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then(async (res) => {
    //     console.log(res);
    //     console.log(res.headers);
    //     return await fetch(`${process.env.REACT_APP_SERVER_URL}/members`);
    // if (res.status === 200) {
    //   console.log(res);
    //   sessionStorage.setItem('user_id', res.data);
    //   dispatch(setIsLogin(res.data));
    //   return await fetch(
    //     `${process.env.REACT_APP_SERVER_URL}/members/${res.data}`,
    //   );
    // } else if (res.status === 403) {
    //   setErrorMsg('Log-in is failed');
    // } else {
    //   console.log('server error');
    //   setErrorMsg('server error');
    // }
    // })
    // .then((res) => {
    //   console.log(res);
    //   dispatch(setUserInfo(res.data));
    //   navigate('/');
    // })
    // .catch((e) => console.log(e));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
                message: 'Please input a valid email format',
              },
            })}
          />
          <ErrorContainer>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorContainer>
        </div>
        <div>
          <label>Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
            })}
            type="password"
          />
          <ErrorContainer>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorContainer>
        </div>
        <div>
          <LoginButton
            color="#FFF"
            background="#0A95FF"
            bordercolor="hsl(206,96%,90%)"
            hovercolor="hsl(206,100%,40%)"
            activecolor="hsl(209,100%,37.5%)"
          >
            Log In
          </LoginButton>
          <ErrorContainer>
            <p>{errorMsg}</p>
          </ErrorContainer>
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;
