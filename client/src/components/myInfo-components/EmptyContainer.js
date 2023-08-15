import { styled } from 'styled-components';

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background-color: rgb(248, 249, 249);
  border: 1px solid rgb(227, 230, 232);
  border-radius: 10px;
  text-align: center;
  font-size: 0.8rem;
  color: rgb(106, 115, 124);
  a {
    color: hsl(206, 100%, 40%);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
    &:visited {
      color: hsl(209, 100%, 32%);
    }

    svg {
      margin-left: 0.1rem;
    }
  }
`;

export default EmptyContainer;
