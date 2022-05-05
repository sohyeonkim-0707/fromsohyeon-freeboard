import styled from "@emotion/styled";
import { FormOutlined } from "@ant-design/icons";

// 전체
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  /* margin: 30px auto; */
  padding: 0px 100px;
`;

// 헤더 부분
export const CommentHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const MyIcon = styled(FormOutlined)`
  margin-right: 10px;
`;

export const CommentIcon = styled.img`
  margin-right: 10px;
`;

export const CommentTitle = styled.div`
  margin-bottom: 20px;
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
