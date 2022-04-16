// 각각의 레이아웃 컴포넌트를 하나로 조립하는 곳
import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

// const BodyWrapper = styled.div`
//   display: flex;
// `;

// 바디영역
const Body = styled.div`
  /* height: 500px; */
  margin: 0 auto;
`;

// 사이드바는 여기에 직접 이모션 적용 (하지만 나는 안씀)
// const LayoutSidebar = styled.div`
//   width: 400px;
//   height: 2500px;
//   background-color: beige;

//   }
// `;

const HIDDEN_PAGE = ["/"];

// 타입스크립트
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.asPath);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavigation />}
      {/* <LayoutSidebar> Sidebar </LayoutSidebar> */}
      <Body>{props.children}</Body>

      {!isHidden && <LayoutFooter />}
    </>
  );
}
