import React, { useState } from 'react';
import UpButton from '../ButtonComponents/UpButton';
import DownButton from '../ButtonComponents/DownButton';

import styled from 'styled-components';

const CounterButton = () => {
  const [count, setCount] = useState(0); // 초기 카운트 값을 0으로 설정

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); // 이전 카운트 값에 +1을 더함
  };

  const handleIncrementDown = () => {
    setCount((prevCount) => prevCount - 1); // 이전 카운트 값에 +1을 더함
  };

  const Container = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    text-align: center;
  `;

  return (
    <Container>
      <UpButton onClick={handleIncrement}>Click me!</UpButton>
      <p>{count}</p>
      <DownButton onClick={handleIncrementDown}>Click me!</DownButton>
    </Container>
  );
};

export default CounterButton;
