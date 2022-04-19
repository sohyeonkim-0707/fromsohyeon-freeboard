// 네비게이션 페이지
// 여기에 각 종 메뉴가 있음 라우터해서 각 페이지로 이동할거임

import { useRouter } from "next/router";
import { MouseEvent, Fragment } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 50px;
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: gray;
  }
`;

// 메뉴 추가하기 함수
const NAVI_MENU = [
  { name: "OPENAPI", page: "/openapi" },
  { name: "POST", page: "/boards/new" },
  { name: "COMUNNITY", page: "/boards" },
  { name: "MARKET", page: "/market/new" },
  { name: "MYPAGE", page: "/mypage" },
];

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  // map 으로 메뉴 뿌려줌
  return (
    <Wrapper>
      {NAVI_MENU.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
