import styled from 'styled-components';

// 스타일된 컴포넌트 생성
const StyledButton = styled.button`
  width: 44.78px;
  height: 26px;
  display: flex;
  padding: 4px 13.39px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  border: none;
  background-color: transparent;
  margin-top: 1rem;
`;

function ResetButton() {
  return (
    <StyledButton>
      <div className="ResetButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
        >
          <path
            d="M3.89002 8.83999C3.8911 7.06562 4.48204 5.34196 5.56988 3.94018C6.65772 2.53839 8.18072 1.53804 9.89927 1.0965C11.6178 0.654963 13.4344 0.79729 15.0632 1.50109C16.692 2.2049 18.0407 3.43024 18.8969 4.98434C19.7532 6.53844 20.0684 8.3331 19.7932 10.086C19.5179 11.8389 18.6677 13.4505 17.3763 14.6673C16.0849 15.8842 14.4256 16.6371 12.6594 16.8078C10.8933 16.9784 9.12051 16.5571 7.62002 15.61L9.09002 14.14C10.2498 14.7519 11.5781 14.9671 12.8717 14.7525C14.1654 14.538 15.3531 13.9055 16.2532 12.9519C17.1533 11.9984 17.7163 10.7761 17.8559 9.47229C17.9955 8.16844 17.7042 6.85474 17.0264 5.73218C16.3486 4.60961 15.3218 3.73999 14.1029 3.25637C12.884 2.77274 11.5403 2.70173 10.2772 3.05421C9.01418 3.40669 7.90138 4.16324 7.10908 5.20812C6.31677 6.25301 5.88858 7.52868 5.89002 8.83999L8.90002 8.82999L4.90002 12.83L0.900024 8.82999H3.90002L3.89002 8.83999ZM10.89 4.83999H11.9L11.89 9.19999L15.11 11.3L14.51 12.23L10.89 9.83999V4.83999Z"
            fill="#BABFC4"
          />
        </svg>{' '}
      </div>
    </StyledButton>
  );
}

export default ResetButton;