import styled from 'styled-components';

export const Balloon = styled.div`
  position: relative;
  background-color: #1378d0;
  /* border-radius: 0.1em; */
  height: 41px;
  width: 309.56px;
  text-align: center;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 11%;
    width: 0;
    height: 0;
    border: 0.75em solid transparent;
    border-right-color: #1378d0;
    border-left: 0;
    border-top: 0;
    margin-top: -0.375em;
    margin-left: -0.75em;
  }
`;

// 사용 예시
const BalloonApp = () => {
  return (
    <div>
      <Balloon>Text inside the balloon</Balloon>
    </div>
  );
};

export default BalloonApp;
