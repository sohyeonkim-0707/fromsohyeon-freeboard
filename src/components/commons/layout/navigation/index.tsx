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

// 메뉴 추가하기
const NAVI_MENU = [
  { name: "OPENAPI", page: "/openapi" },
  { name: "COMUNNITY", page: "/boards" },
  { name: "MARKET", page: "/markets" },
  { name: "MYPAGE", page: "/mypage" },
];

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

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
