import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-bottom: 30px;
  font-size: 20px;
`;

export const InputTitle = styled.div`
  width: 100%;
  height: 20px;
  text-align: left;
  font-size: 10px;
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 50px;
  /* margin-bottom: 10px; */
  background: orange;
  outline: none;
  border: none;
  text-indent: 10px;
`;
export const Password = styled.input`
  width: 100%;
  height: 50px;
  background: orange;
  outline: none;
  border: none;
  text-indent: 10px;
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: none;

  background-color: ${(props: any) => (props.isActive ? "#FFD600" : "none")};
`;

export const Error = styled.div`
  font-size: 10px;
  color: red;
`;
