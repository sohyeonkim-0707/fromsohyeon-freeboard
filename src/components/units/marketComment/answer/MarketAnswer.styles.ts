import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 0px 100px;
`;

// 인풋
export const CommentWriterInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
`;

// 수정 삭제 버튼
export const UpdateIcon = styled.img`
  cursor: pointer;
  margin-left: 10px;
`;

export const DeleteIcon = styled.img`
  cursor: pointer;
  margin-left: 10px;
`;

// 등록 부분
export const CommentRegisterWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const CommentRegisterButton = styled.button`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  background-color: ${(props) => (props.isActive ? "black" : "none")};
  color: white;
`;

export const CommentCount = styled.div`
  font-size: 13px;
  margin-right: 10px;
  padding-left: 5px;
`;
// 에러
export const CommentError = styled.div`
  color: red;
  font-size: 13px;
  width: 100%;
`;
