import * as S from "./Join.styles";

export default function JoinPageUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>Join</S.Title>

      <S.InputWrapper>
        <S.InputTitle>이메일</S.InputTitle>
        <S.InputBox
          onChange={props.onChangeEmail}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
        <S.Error>{props.emailError}</S.Error>

        <S.InputTitle>이름</S.InputTitle>
        <S.InputBox
          onChange={props.onChangeName}
          type="text"
          placeholder="이름을 입력해주세요."
        ></S.InputBox>
        <S.Error>{props.nameError}</S.Error>

        <S.InputTitle>비밀번호</S.InputTitle>
        <S.InputBox
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <S.Error>{props.passwordError}</S.Error>

        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.InputBox
          onChange={props.onChangePassword2}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <S.Error>{props.passwordError2}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.JoinButton onClick={props.onClickJoin} isActive={props.isActive}>
          회원가입하기
        </S.JoinButton>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
