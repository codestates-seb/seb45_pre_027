import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Park from '../../../assets/images/image1.png';

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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  padding-top: 5px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserBoxText = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 8px;
`;
export const PostNo = styled.text`
  color: #6a737c;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 141.667% */
`;

export const Text = styled.text`
  width: auto;
  height: auto;
  background-color: red;
`;

export const PostSignatureImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15.999px;
  flex-shrink: 0;
  background-color: red;
`;

const dummyUserInfo = {
  data: [
    {
      boardId: 1,
      user: 'duynhan vo',

      time: 1,
      title: 'Title 1',
      content: 'Content 1',
      img: 'https://s3-alpha-sig.figma.com/img/04f1/914d/c4a5f8436fb69da6a2cf29c7498a7943?Expires=1692576000&Signature=VEna6F~TWO-lxPMdXISBN~XCym2utmm0TjifmLVUXwxUvO4uSe12wuATtipiAvcTMVdRdswTLD~Kz7xxlvRZ4hjq4B9oBY42GjuKpx7mHJ9oV1e9NaQ9jIrpsShbjQb8QS-7y8HO5ifJVuefZBOtcU5cmr2fIUEhPzI6BFFCX~dqTrZvYXsPfA8bNoxMrty5F5N-~-oefa~WdWciF2V-Pn2dQHJ~J6FaJbRLyKcHUNKncpn5I9GSVBsHkdc4G~TWjEeSkiJ8O6REZAzlD-BJXorbSjNkY-wTGbFj-AkJGs77~eOtHF-cwxmTUnt26h1YtOa~x~xKaYP3vPMpV8FTVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 ',
    },
  ],
};

export const UserInfoTop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyUserInfo.data); // 더미 데이터로 상태를 설정합니다.
  }, []);

  return (
    <PostSignature>
      <Box>
        <UserInfo>
          {data.map((dataItem) => (
            <div key={dataItem.boardId}>
              <UserActionTime>asked {dataItem.time} mins ago</UserActionTime>
              <UserBox>
                <Photo src={dataItem.img} />
                <UserDetails>
                  <UserBoxText>
                    <Text>{dataItem.user}</Text>
                    <PostNo>{dataItem.boardId}</PostNo>
                  </UserBoxText>
                </UserDetails>
              </UserBox>
            </div>
          ))}
        </UserInfo>
      </Box>
    </PostSignature>
  );
};
