import * as S from "./MarketAnswer.styles";

export default function MarketCommentAnswerUI(props) {
  return (
    <S.Wrapper>
      <S.CommentWriterInput
        placeholder="답글을 등록해주세요."
        onChange={props.onChangeContents}
        defaultValue={props?.contents}
        maxLength={100}
      />
      <S.CommentRegisterWrapper>
        <S.CommentCount>{props?.contents?.length}/100</S.CommentCount>
        <S.CommentRegisterButton
          onClick={props.isEdit ? props.updateAnswer : props.submitAnswer}
          isActive={props.isEdit ? true : props.isValid}
          disabled={props.isEdit ? false : !props.isValid}
        >
          {props.isEdit ? "답변 수정" : "답변 등록"}
        </S.CommentRegisterButton>
      </S.CommentRegisterWrapper>
    </S.Wrapper>
  );
}
