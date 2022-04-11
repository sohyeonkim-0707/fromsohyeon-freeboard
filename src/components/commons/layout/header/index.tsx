// 헤더 페이지

import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 50px;
  background-color: black;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const InnerButton = styled.button`
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 20px;
  margin-top: 10px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onCickMoveToJoin = () => {
    router.push("/join");
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerButton onClick={onClickMoveToLogin}>login</InnerButton>
        <InnerButton onClick={onCickMoveToJoin}>join</InnerButton>
      </InnerWrapper>
    </Wrapper>
  );
}
