import JoinPageUI from "./Join.presenter";
import { useState } from "react";

export default function JoinPage() {
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordError2, setPasswordError2] = useState("");

  // /^\w+@\w+\.\w+$/.test("event.target.value")

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);

    if (event.target.value !== "") {
      setEmailError("");
    }
    if (event.target.value && name && password && password2) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeName = (event: any) => {
    setName(event.target.value);

    if (event.target.value !== "") {
      setNameError("");
    }
    if (email && event.target.value && password && password2) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: any) => {
    setPassword2(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (email && name && event.target.value && password2) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword2 = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (email && name && password && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickJoin = async () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요.");
    }
    if (name === "") {
      setNameError("이름을 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (password2 === "") {
      setPasswordError2("비밀번호를 입력해주세요.");
    }
    if (/^\w+@\w+\.\w+$/.test("event.target.value") === false) {
      alert("이메일 형식이 맞지 않습니다.");
    }
  };
  return (
    <JoinPageUI
      isActive={isActive}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      passwordError2={passwordError2}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangePassword2={onChangePassword2}
      onClickJoin={onClickJoin}
    />
  );
}
