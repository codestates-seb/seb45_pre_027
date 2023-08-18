// Answers 카운트 부분 영역

import styled from 'styled-components';
import React, { useState } from 'react';
import DropDown from '../../../assets/images/arrow_drop_down.svg';
import CountObjects from '../CountObjects/CountComponents';

// 스타일링된 컨테이너
const Container = styled.div`
  height: 24.7px;
  /* background-color: gray; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  background-color: salmon;
`;

// 카운트 영역
const Count = styled.div`
  display: flex;
  flex-direction: row;
`;

// 카운트 넘버

const CountNumber = styled.text`
  margin-right: 5px;
`;
// 스타일링된 드롭다운 메뉴
const Dropdown = styled.select`
  width: 257px;
  height: 32px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  appearance: none;
  outline: none;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  option {
    padding: 5px 10px;
  }
`;

// 스타일링된 드롭다운 박스
const AnswerCountBoxDrop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

// 드롭다운 컴포넌트를 포함한 래퍼. 화살표 아이콘 위치를 조절하기 위해 사용
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

// 드롭다운 내부의 화살표 아이콘 스타일링
const ArrowDropUpDown = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
`;

// 드롭다운 정렬 옵션 컴포넌트
const Sorter = () => {
  const [setSortOption] = useState(''); // 선택된 정렬 옵션 저장

  // 드롭다운 변경 핸들러
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSortOption(selectedValue);
  };

  return (
    <DropdownWrapper>
      <Dropdown onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </Dropdown>
      <ArrowDropUpDown src={DropDown} />
    </DropdownWrapper>
  );
};

// 답변 수 및 드롭다운을 포함한 메인 컴포넌트
const AnswerBox = () => (
  <Container>
    <Count>
      <CountNumber>
        <CountObjects />
      </CountNumber>
      Answers
    </Count>
    <AnswerCountBoxDrop>
      <p>Sorted by : </p> <Sorter />
    </AnswerCountBoxDrop>
  </Container>
);

export default AnswerBox;
