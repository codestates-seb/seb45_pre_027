import { styled } from 'styled-components';
import {
  PostSignature,
  UserInfo,
  UserActionTime,
  Photo,
  UserDetails,
} from './UserInfo';

import hand from '../../../assets/images/hand.svg'; // SVG 파일 경로 수정
import handS from '../../../assets/images/handS.svg'; // 두 번째 SVG 이미지 파일 경로

function UserInfoBox() {
  const time = ['3', '2', '1'];
  const img = [
    'https://s3-alpha-sig.figma.com/img/04f1/914d/c4a5f8436fb69da6a2cf29c7498a7943?Expires=1692576000&Signature=VEna6F~TWO-lxPMdXISBN~XCym2utmm0TjifmLVUXwxUvO4uSe12wuATtipiAvcTMVdRdswTLD~Kz7xxlvRZ4hjq4B9oBY42GjuKpx7mHJ9oV1e9NaQ9jIrpsShbjQb8QS-7y8HO5ifJVuefZBOtcU5cmr2fIUEhPzI6BFFCX~dqTrZvYXsPfA8bNoxMrty5F5N-~-oefa~WdWciF2V-Pn2dQHJ~J6FaJbRLyKcHUNKncpn5I9GSVBsHkdc4G~TWjEeSkiJ8O6REZAzlD-BJXorbSjNkY-wTGbFj-AkJGs77~eOtHF-cwxmTUnt26h1YtOa~x~xKaYP3vPMpV8FTVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 ',
  ];
  const user = ['duynhan vo'];

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 7px;
    padding-top: 5px;
  `;

  const UserBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const UserBoxText = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 8px;
  `;

  const PostNo = styled.text`
    color: #6a737c;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 141.667% */
  `;

  const Text = styled.text`
    width: auto;
    height: auto;
  `;

  const NewContributorIndicator = styled.div`
    display: flex;
    width: 200px;
    padding: 6px 86px 6px 7.975px;
    align-items: flex-end;
    gap: 0.025px;

    border-radius: 0px 0px 4px 4px;
    background: #d0e3f1;
  `;

  //  손 인사 이미지 <손>
  const Vector = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 16.058px; */
    height: 16.779px;
    flex-shrink: 0;

    position: relative; //포지션 앞으로

    color: #3b4045;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 154.545% */
  `;

  // 손인사 이지지 <흔들거리는 모션>
  const Vector2 = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 16.058px; */
    height: 16.779px;
    flex-shrink: 0;

    position: absolute; //포지션 뒤로

    color: #3b4045;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 154.545% */
  `;

  const PostSignatureImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15.999px;
    flex-shrink: 0;
  `;

  // 부모 컨테이너 스타일
  const CenteredContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // New contributor
  const NewContributor = styled.div`
    color: #3b4045;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 154.545% */
    width: 88px;
    height: 17px;
    padding-left: 4%;
  `;

  return (
    <PostSignature>
      <Box>
        <UserInfo>
          <UserActionTime>asked {time[0]} mins ago</UserActionTime>
          <UserBox>
            <Photo src={img} />
            <UserDetails>
              <UserBoxText>
                <Text>{user}</Text>
                <PostNo>1</PostNo>
              </UserBoxText>
            </UserDetails>
          </UserBox>
        </UserInfo>
      </Box>
      <NewContributorIndicator>
        <CenteredContainer>
          <Vector>
            {/* 첫 번째 SVG 이미지 */}
            <PostSignatureImg src={hand} />
            <Vector2>
              {/* 두 번째 SVG 이미지 */}
              <PostSignatureImg src={handS} />
            </Vector2>
            <NewContributor> New contributor</NewContributor>
          </Vector>
        </CenteredContainer>
      </NewContributorIndicator>
    </PostSignature>
  );
}

export default UserInfoBox;
