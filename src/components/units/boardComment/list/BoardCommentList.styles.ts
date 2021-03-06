import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 1200px;
  height: 128px;
  margin: 0px 100px;
  padding-top: 20px;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

// 별 위치 자유자재
export const Star = styled(Rate)`
  margin-left: 20px;
`;

export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditIcon = styled(EditOutlined)`
  margin-right: 10px;
  cursor: pointer;
  color: gray;
`;

export const DeleteIcon = styled(CloseOutlined)`
  margin-right: 10px;
  cursor: pointer;
  color: gray;
`;

export const DateString = styled.div`
  padding-top: 15px;
  padding-left: 60px;
  color: lightgray;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const Scroll = styled.div`
  height: 500px;
  overflow: auto;
`;
