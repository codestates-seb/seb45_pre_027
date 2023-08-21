import styled from 'styled-components';

// 스타일된 컴포넌트 생성
export const PostSignature = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 4px;
  background: #d9eaf7;
`;

export const UserInfo = styled.div`
  width: 193px;
  height: 62.69px;
`;

export const UserActionTime = styled.div`
  display: flex;
  width: 187px;
  padding: 0px 95px 0.69px 0px;
  align-items: flex-start;

  color: #6a737c;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.692px; /* 142.657% */
`;

export const UserDetails = styled.div`
  display: flex;
  width: 147px;
  padding-right: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;

  color: #0074cc;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 141.667% */
`;

export const Photo = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

/* 스타일 추가 */
// function UserInfoBox() {
//   return (
//     <PostSignature>
//       <UserActionTime> asked {time} ago</UserActionTime>
//     </PostSignature>
//   );
// }

// export default UserInfoBox;
