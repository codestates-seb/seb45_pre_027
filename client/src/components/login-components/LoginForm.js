import { styled } from 'styled-components';
import SocialButton from './SocialButton';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../../store/loginSlice';
import { setUserInfo } from '../../store/userInfoSlice';

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
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMsg, setErrorMsg] = useState('');
  const handleLogin = async (data) => {
    // 세션 로그인 방식
    // await fetch(`${process.env.REACT_APP_SERVER_URL}/members/log-in/`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then(async (res) => {
    //     if (res.status === 200) {
    //       sessionStorage.setItem("user_id", res.data);
    //       dispatch(setIsLogin(res.data));
    //       return await fetch(
    //         `${process.env.REACT_APP_SERVER_URL}/members/${res.data}`
    //       );
    //     } else if (res.status === 403) {
    //       setErrorMsg("Log-in is failed");
    //     } else {
    //       setErrorMsg("server error");
    //     }
    //   })
    //   .then((res) => {
    //     dispatch(setUserInfo(res.data));
    //     navigate("/");
    //   });
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
