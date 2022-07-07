import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 10%;
  /* background-color: beige; */
  line-height: 80px;
`;

export const Logo = styled.h1`
  height: 100%;
  /* background-color: brown; */
  font-size: 1.8rem;
  text-align: center;
  cursor: pointer;
`;

export const MenuList = styled.li`
  height: 100%;
  padding-left: 10%;
  font-size: 1.8rem;
  text-align: center;
  list-style: none;
  padding-left: 0px;
  /* background-color: yellow; */
  cursor: pointer;
`;
