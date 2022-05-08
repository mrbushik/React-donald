import styled from 'styled-components';
import bannerImg from '../image/banner.png'

const BannerImage = styled.img`
width: 100%;
 height: 210px;
 background-image: url(${bannerImg});
background-position: center;
background-size: cover;
`;
const Banner = ()=>{
    return(
<>
<BannerImage/>
</>
    )
}
export default Banner
