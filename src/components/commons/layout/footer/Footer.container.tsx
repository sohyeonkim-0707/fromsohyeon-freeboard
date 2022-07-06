import * as S from "./Footer.styles";
import { useRouter } from "next/router";
import { MouseEvent, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

const FOOTER_MENU = [
  // { name: "피동보다 능동", page: "/" },
  { name: "Shop the Photos", page: "/shop" },
  { name: "About 피동보다 능동", page: "/about" },
];

export default function Footer() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <>
      <S.Wrapper>
        {FOOTER_MENU.map((el) => (
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
