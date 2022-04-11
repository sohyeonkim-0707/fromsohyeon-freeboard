import * as S from "./login.styles";

export default function LoginPageUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>

      <S.InputWrapper>
        <S.Email
          onChange={props.onChangeEmail}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
        <S.Error>{props.emailError}</S.Error>
        <S.Password
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <S.Error>{props.passwordError}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <input type="radio" id="dd" name="drone" value="huey"></input>
        <label> 로그인 상태 유지</label>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.LoginButton onClick={props.onClickLogin} isActive={props.isActive}>
          로그인하기
        </S.LoginButton>
      </S.InputWrapper>

      <S.BottomWrapper>
        <S.FindEmail>이메일 찾기</S.FindEmail>
        <S.FindPassword>비밀번호 찾기 </S.FindPassword>
        <S.Join>회원가입</S.Join>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
