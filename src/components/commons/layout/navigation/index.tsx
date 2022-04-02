// 네비게이션 페이지
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 50px;
  background-color: orange;
  text-align: center;
  line-height: 50px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerButton = styled.button`
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 10px 20px;
  background-color: orange;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    /* color: blue; */
    font-weight: bold;
  }
`;

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerButton>COMMUNITY</InnerButton>
        <InnerButton>MARKET</InnerButton>
        <InnerButton>MYPAGE</InnerButton>
      </InnerWrapper>
    </Wrapper>
  );
}
