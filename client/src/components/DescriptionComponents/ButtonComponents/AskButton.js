import styled from 'styled-components';

// 스타일된 컴포넌트 생성
const Button = styled.button`
  background-color: #0a95ff;

  width: 100.11px;
  height: 37.78px;

  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 11.39px 12.72px 11.39px 11.39px;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 125% */

  &:hover {
    background-color: hsl(209, 100%, 32%);
  }
`;

function AskButton() {
  return <Button>Ask Question</Button>;
}
export default AskButton;
