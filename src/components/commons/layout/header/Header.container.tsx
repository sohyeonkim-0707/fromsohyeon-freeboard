import { MouseEvent, Fragment } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import * as S from "./Header.styles";

const HEADER_MENU = [
  // { name: "피동보다 능동", page: "/" },
  { name: "SHOP", page: "/shop" },
  { name: "ABOUT", page: "/about" },
  { name: "LOGIN", page: "/login" },
  { name: "CART", page: "/cart" },
];

export default function Navigation() {
  const router = useRouter();
  //  MouseEvent<HTMLDivElement>
  // 우선 any 로 줌, 위 처럼 타입을 잡아주면 onClick 에 타입오류가 들어옴...
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  const conClicHome = () => {
    router.push("/");
  };

  return (
    <>
      <S.Wrapper>
        <S.Logo onClick={conClicHome}>피동보다 능동</S.Logo>
        {HEADER_MENU.map((el) => (
          <ul key={uuidv4()}>
            <S.MenuList id={el.page} onClick={onClickMenu}>
              {el.name}
            </S.MenuList>
          </ul>
        ))}
      </S.Wrapper>
    </>
  );
}
