import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 446.22px;
  padding-right: 0px;
  align-items: flex-start;
  align-content: flex-start;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const Share = styled.button`
  display: flex;
  padding: 4px 5.92px 4px 4px;
  align-items: flex-start;
  background-color: transparent;
  border: none;

  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    color: #6a737c69;
  }
`;

const Edit = styled.button`
  display: flex;
  padding: 4px 5.36px 4px 4px;
  align-items: flex-start;
  background-color: transparent;
  border: none;

  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    color: #6a737c69;
  }
`;

const Follow = styled.button`
  display: flex;
  padding: 4px 5.73px 4px 4px;
  align-items: flex-start;
  background-color: transparent;
  border: none;

  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */

  &:hover {
    color: #6a737c69;
  }
`;

function ButtonList() {
  return (
    <Container>
      <Share>Share</Share>
      <Edit>Edit</Edit>
      <Follow>Follow</Follow>
    </Container>
  );
}

export default ButtonList;
