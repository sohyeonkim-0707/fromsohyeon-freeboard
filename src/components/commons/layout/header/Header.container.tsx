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

export default function Header() {
  const router = useRouter();

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
          <Fragment key={uuidv4()}>
            <S.MenuList id={el.page} onClick={onClickMenu}>
              {el.name}
            </S.MenuList>
          </Fragment>
        ))}
      </S.Wrapper>
    </>
  );
}
