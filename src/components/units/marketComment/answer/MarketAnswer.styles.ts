import styled from "@emotion/styled";

// 전체
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  margin: 30px auto;
  /* margin-left: 20px; */
  padding: 0px 100px;
`;

// 인풋
export const CommentWriterInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
`;

// 수정 삭제 버튼
export const UpdateIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

// 등록 부분
export const CommentRegisterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  margin-bottom: 30px;
`;

export const CommentRegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 32px;
  background-color: ${(props) => (props.isActive ? "black" : "none")};
  border: 0px;
  color: white;
`;

export const CommentCount = styled.div`
  margin-right: 10px;
  padding-left: 5px;
  font-size: 13px;
`;
// 에러
export const CommentError = styled.div`
  width: 100%;
  color: red;
  font-size: 13px;
`;
