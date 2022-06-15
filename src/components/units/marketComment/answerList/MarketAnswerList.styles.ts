import styled from "@emotion/styled";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  margin-top: 10px;
  /* margin-left:40px;z */
  padding: 0px 100px;
`;
// 리스트 부분
export const CommentFetchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid gray;
`;

export const CommentProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const CommentContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CommentFetchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
export const CommentWriter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  word-break: break-all;
`;

export const CommentContents = styled.div`
  margin-bottom: 30px;
`;

export const CommentCreatedAt = styled.div`
  margin-bottom: 10px;
  color: #bdbdbd;
  font-size: 12px;
`;

// 수정하기 삭제하기 버튼
// export const UpdateIcon = styled.img``;

export const EditIcon = styled(EditOutlined)`
  margin-right: 10px;
  cursor: pointer;
  color: gray;
`;

export const UpdateIconButton = styled.button`
  margin-right: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

// export const DeleteIcon = styled.img``;

export const DeleteIcon = styled(CloseOutlined)`
  margin-right: 10px;
  cursor: pointer;
  color: gray;
`;

export const DeleteIconButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;
