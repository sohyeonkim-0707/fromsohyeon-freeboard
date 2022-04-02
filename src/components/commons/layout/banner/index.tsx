// 배너 페이지
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 300px;
  background-color: lightgray;
`;

// css
// const StyledSlider = styled(Slider)`
//   height: 260px;
//   text-align: center;
// `;

// const Photo = styled.img`
//   margin: 10px auto;
//   height: 190px;
//   .slick-slide div {
//     outline: none;
//   }
// `;

const Title = styled.p`
  text-align: center;
  line-height: 300px;
`;

const settings = {
  dots: true, // dots 사진 밑에 버튼 false 하면 사라진다
  fade: true, // infinite 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복
  infinite: true, // 콘텐츠를 넘어갈 때 속도
  speed: 500, // 한 화면에 보이는 콘텐츠 수
  slidesToShow: 1, // 한 번에 넘어가는 콘텐츠 수
  slidesToScroll: 1,
};

export default function LayoutBanner() {
  return (
    // div 화살표 패딩을 줘야 한다.
    <Wrapper>
      <Title>Banner</Title>
      {/* <StyledSlider {...settings}>
        <div>
          <Photo src={"/images/berlin.jpg"}></Photo>
        </div>
        <div>
          <Photo src={"/images/2.jpg"}></Photo>
        </div>
        <div>
          <Photo src={"/images/3.jpg"}></Photo>
        </div>
      </StyledSlider> */}
    </Wrapper>
  );
}
