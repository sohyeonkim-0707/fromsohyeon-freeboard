import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 50px auto;
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Email = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background: orange;
  border: none;
  outline: none;
  text-indent: 10px;
`;
export const Password = styled.input`
  width: 100%;
  height: 50px;
  background: orange;
  border: none;
  outline: none;
  text-indent: 10px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: any) => (props.isActive ? "#FFD600" : "none")};
  border: none;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  cursor: pointer;
  div {
    width: 30%;
    text-align: center;
    font-size: 5px;
  }
`;
export const Error = styled.div`
  font-size: 10px;
  color: red;
`;
export const FindEmail = styled.div``;
export const FindPassword = styled.div``;
export const Join = styled.div``;
