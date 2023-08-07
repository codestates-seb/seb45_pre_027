import styled from "styled-components";

// 스타일된 컴포넌트 생성
export const AskButton = styled.button`
  background-color: #0a95ff;
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

// 스타일된 컴포넌트 생성
export const LinkButton = styled.button`
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

// 스타일된 컴포넌트 생성
export const UpButton = styled.button`
  background-color: white;
  display: flex;
  padding: 11.39px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 1000px;
  border: 1px solid #d6d9dc;
  flex-shrink: 0;
  &:hover {
    background-color: hsl(27, 90%, 85%);
  }
`;

// 스타일된 컴포넌트 생성
export const DownButton = styled.button`
  background-color: white;
  display: flex;
  padding: 11.39px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 1000px;
  border: 1px solid #d6d9dc;
  flex-shrink: 0;
  &:hover {
    background-color: hsl(27, 90%, 85%);
  }
`;
