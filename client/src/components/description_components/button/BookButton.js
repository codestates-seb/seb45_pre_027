import styled from 'styled-components';

// 스타일된 컴포넌트 생성
const StyledButton = styled.button`
  display: flex;
  padding: 4px 13.39px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  border: none;
  background-color: transparent;
`;

function BookButton() {
  return (
    <StyledButton>
      <div className="BookButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
        >
          <path
            d="M6.39001 10.44L10.39 13.1V2.83997H2.39001V13.1L6.39001 10.44ZM0.390015 16.84V2.83997C0.390015 1.73997 1.29001 0.839966 2.39001 0.839966H10.39C10.9204 0.839966 11.4292 1.05068 11.8042 1.42575C12.1793 1.80082 12.39 2.30953 12.39 2.83997V16.84L6.39001 12.84L0.390015 16.84Z"
            fill="#BABFC4"
          />
        </svg>
      </div>
    </StyledButton>
  );
}

export default BookButton;
