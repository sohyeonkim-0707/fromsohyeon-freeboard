// 레이아웃 컴포넌트 합치는 곳
import { ReactNode } from "react";
import styled from "@emotion/styled";
import Navigation from "./header/Header.container";
import Footer from "./footer/Footer.container";

const Body = styled.div`
  /* height: 1000px; */
  margin: 0 auto;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Navigation />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
}
