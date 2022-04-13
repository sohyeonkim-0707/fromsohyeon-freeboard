import LoginPageUI from "./login.presenter";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { accessTokenState } from "../../../commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // /^\w+@\w+\.\w+$/.test("event.target.value")

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);

    if (event.target.value !== "") {
      setEmailError("");
    }
    if (event.target.value && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (email && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickLogin = async () => {
    if (email === "") {
      // setEmailError("이메일을 입력해주세요.");
      alert("이메일을 입력해 주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (/^\w+@\w+\.\w+$/.test(email) === false) {
      setEmailError("이메일 형식이 맞지 않습니다.");
      return;
    }
    if (email !== "" && password !== "") {
      try {
        const result = await loginUser({
          variables: {
            email: email,
            password: password,
          },
        });
        console.log(result);
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        Modal.success({ content: "로그인에 성공하였습니다!" });
        router.push("/mypage");
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <LoginPageUI
      isActive={isActive}
      emailError={emailError}
      passwordError={passwordError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
