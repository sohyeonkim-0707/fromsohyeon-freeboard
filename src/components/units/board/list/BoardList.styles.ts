import styled from "@emotion/styled";
import { FormOutlined } from "@ant-design/icons";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

export const TableTop = styled.div`
  margin-top: 20px;
  border-top: 1px solid gray;
`;

export const TableBottom = styled.div`
  border-bottom: none;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  border-bottom: 1px solid gray;
  line-height: 52px;
  :hover {
    background: orange;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

export const BoardNewIcon = styled(FormOutlined)`
  margin-right: 10px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 171px;
  height: 45px;
  background-color: #dcdcdc;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-align: center;
  :hover {
    color: white;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;
