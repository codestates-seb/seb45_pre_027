import { styled } from 'styled-components';
import SocialButton from '../login-components/SocialButton';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../../redux/loginSlice';
import { setUserInfo } from '../../redux/userInfoSlice';

const Container = styled.div`
  width: 100%;
  padding: 24px 18px;
  display: inline-flex;
  align-items: flex-start;
  border-radius: 8px;
  background: #fff;
  box-shadow:
    0px 1px 4px 0px rgba(0, 0, 0, 0.1),
    0px 20px 48px 0px rgba(0, 0, 0, 0.05),
    0px 10px 24px 0px rgba(0, 0, 0, 0.05);
`;
const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  div {
    width: 100%;

    .password-helper {
      padding-top: 4px;
      color: #6a737c;
      font-family: Inter;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 15.692px; /* 142.657% */
    }
  }
  label {
    color: #0c0d0e;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.615px; /* 140.11% */
  }
  input {
    padding: 0.6em 0.7em;
    width: 100%;
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
  p {
    color: red;
    text-align: center;
    font-size: 0.7rem;
  }
`;
const LoginButton = styled(SocialButton)`
  width: 100%;
`;

const HelperContainer = styled.div`
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

function SignUpForm() {
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
    console.log(data);
    console.log('sign-up');
    await fetch(`${process.env.REACT_APP_SERVER_URL}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        // name: data.name,
      }),
    })
      .then(async (res) => {
        console.log(res);
        if (res.status === 201) {
          alert('Sign-up is complete.');
          navigate('/log-in');
        } else if (res.status === 403) {
          alert('Sign-up is failed.');
          navigate('/sign-up');
        } else {
          alert('Server error.');
          navigate('/sign-up');
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        {/* <div>
          <label>Display name</label>
          <input {...register('name')} />
        </div> */}
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
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm,
                message: 'Please input a valid password format',
              },
            })}
            type="password"
          />
          <p className="password-helper">
            Passwords must contain at least 8 characters, including at least 1
            upper, 1 lower, 1 non-alpha and 1 number.
          </p>
          <ErrorContainer>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
            />
          </ErrorContainer>
        </div>

        <HelperContainer>
          <LoginButton
            color="#FFF"
            background="#0A95FF"
            bordercolor="hsl(206,96%,90%)"
            hovercolor="hsl(206,100%,40%)"
            activecolor="hsl(209,100%,37.5%)"
          >
            Sign Up
          </LoginButton>
          <ErrorContainer>
            <p>{errorMsg}</p>
          </ErrorContainer>
          By clicking "Sign up", you agree to our{' '}
          <a href="#">terms of service</a> and acknowledge that you have read
          and understand our <a href="#">privacy policy</a> and{' '}
          <a href="#">code of conduct</a> .
        </HelperContainer>
      </Form>
    </Container>
  );
}

export default SignUpForm;
