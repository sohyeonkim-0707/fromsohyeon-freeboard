import LoginPageUI from "./login.presenter";
import { useState } from "react";

export default function LoginPage() {
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      setEmailError("이메일을 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (/^\w+@\w+\.\w+$/.test("event.target.value") === false) {
      alert("이메일 형식이 맞지 않습니다.");
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
