// 각각의 컴포넌트를 하나로 조립하는 곳
import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { ReactNode } from "react";

const BodyWrapper = styled.div`
  display: flex;
`;
// 바디영역
const Body = styled.div`
  /* height: 500px; */
  margin: 0 auto;
`;

// 사이드바는 여기에 직접 이모션 적용
// const LayoutSidebar = styled.div`
//   width: 400px;
//   height: 2500px;
//   background-color: beige;

//   }
// `;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        {/* <LayoutSidebar> Sidebar </LayoutSidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
