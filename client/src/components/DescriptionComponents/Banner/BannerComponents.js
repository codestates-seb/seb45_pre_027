import styled from 'styled-components';
import bannerIMG from '../../../assets/images/banner.png'; // PNG 파일 경로

const Banner = styled.img`
  width: fit-content;
  height: 90px;
`;

function BannerImg() {
  return <Banner src={bannerIMG} />;
}

export default BannerImg;
