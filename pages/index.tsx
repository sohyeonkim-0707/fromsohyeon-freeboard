// 메인 페이지
// react slick 사용하기
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const MainPhoto = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

export default function first() {
  return (
    <Wrapper>
      <MainPhoto src="/home.jpg"></MainPhoto>
    </Wrapper>
  );
}
