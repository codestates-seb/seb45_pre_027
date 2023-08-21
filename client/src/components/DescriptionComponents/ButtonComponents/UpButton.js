import styled from 'styled-components';
// 스타일된 컴포넌트 생성
const StyledButton = styled.button`
  height: 40.78px;
  width: 40.78px;
  margin-bottom: 1rem;

  background-color: white;
  display: flex;
  padding: 11.39px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 1500px;
  border: 1px solid #d6d9dc;
  flex-shrink: 0;
  &:hover {
    background-color: hsl(27, 90%, 85%);
  }
`;

function UpButton(props) {
  return (
    <StyledButton onClick={props.onClick}>
      <div className="UpDownButton">
        <svg
          width="17"
          height="9"
          viewBox="0 0 17 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M0.390015 8.83002H16.39L8.39001 0.830017L0.390015 8.83002Z"
            fill="#3B4045"
          />
        </svg>
      </div>
    </StyledButton>
  );
}

export default UpButton;
