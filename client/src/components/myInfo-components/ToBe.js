import { styled } from 'styled-components';

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  padding: 1rem;
  h2 {
    font-size: 2rem;
  }
`;

function ToBe() {
  return (
    <Container>
      <h2>To be continued...</h2>
    </Container>
  );
}

export default ToBe;
