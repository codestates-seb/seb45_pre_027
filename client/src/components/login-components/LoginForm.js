import { styled } from "styled-components";
import SocialButton from "./SocialButton";

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
  padding: 6px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
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
  }
`;

const LoginButton = styled(SocialButton)`
  margin-top: 10px;
  width: 240px;
`;

function LoginForm() {
  return (
    <Container>
      <Form>
        <div>
          <p>Email</p>
          <input type="text" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" />
        </div>
        <div>
          <LoginButton
            color="#FFF"
            background="#0A95FF"
            borderColor="hsl(206,96%,90%)"
            hoverColor="hsl(206,100%,40%)"
            activeColor="hsl(209,100%,37.5%)"
          >
            Log In
          </LoginButton>
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;
