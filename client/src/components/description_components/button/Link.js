import styled from "styled-components";

// 스타일된 컴포넌트 생성
const StyledButton = styled.button`
  display: flex;
  padding: 5.79px 6.69px 5.8px 7px;
  align-items: flex-start;
  border-radius: 4px;
  background: #e1ecf4;
  border: none;

  color: #39739d;
  text-align: center;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 109.091% */

  å &:hover {
    background-color: #2980b9;
  }
`;

// 컴포넌트 사용
function ButtonLink() {
  return <StyledButton>proxy</StyledButton>;
}

export default ButtonLink;
