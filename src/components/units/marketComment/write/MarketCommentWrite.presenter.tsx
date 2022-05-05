import * as S from "./MarketCommentWrite.styles";

const MarketCommentWriteUI = (props) => {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <S.CommentHeaderWrapper>
          <S.MyIcon />
          {/* <S.CommentIcon src="/boards/detail/commentIcon.png" /> */}
          <div>문의하기</div>
        </S.CommentHeaderWrapper>
      )}
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdateComment : props.onClickComment
        )}
      >
        <S.CommentWriterInput
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...props.register("contents")}
          defaultValue={props.el?.contents || ""}
        />
        <S.CommentRegisterWrapper>
          <S.CommentCount>{props.contentsLength}/100</S.CommentCount>
          <S.CommentError>
            {props.formState.errors.contents?.message}
          </S.CommentError>
          <S.CommentRegisterButton
            type="submit"
            isActive={props.formState.isValid}
          >
            {props.isEdit ? "수정하기" : "문의하기"}
          </S.CommentRegisterButton>
        </S.CommentRegisterWrapper>
      </form>
    </S.Wrapper>
  );
};

export default MarketCommentWriteUI;
