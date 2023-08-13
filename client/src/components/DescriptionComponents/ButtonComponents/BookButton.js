import styled from 'styled-components';
import React, { useState } from 'react';
import BoookMark from '../../../assets/images/bookmark_border_black_24dp.svg'; // SVG 파일 경로 수정

import BoookMarkBlack from '../../../assets/images/bookmark_black_24dp.svg'; // SVG 파일 경로 수정

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
const PostSignatureImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15.999px;
  flex-shrink: 0;
`;

function BookButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <StyledButton onClick={handleButtonClick}>
      <div className="BookButton">
        {/* 아이콘 이미지를 상태에 따라 조건적으로 렌더링 */}
        <PostSignatureImg src={isFollowing ? BoookMarkBlack : BoookMark} />
        {/* 필요한 경우 여기에 'Following' 또는 'Follow' 텍스트를 추가 */}
      </div>
    </StyledButton>
  );
}

export default BookButton;
