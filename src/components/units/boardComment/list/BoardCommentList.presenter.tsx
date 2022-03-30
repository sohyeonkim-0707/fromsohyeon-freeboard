import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  // modal창 event
  function aaa(event: MouseEvent<HTMLDivElement>) {
    alert(event.currentTarget.id + "님의 글을 클릭했습니다!!! ");
  }
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper key={el._id} id={String(el.writer)} onClick={aaa}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
                {/* 별 disabled 선택 안되게끔 */}
                <S.Star value={el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.EditIcon />
              <S.DeleteIcon />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
    </div>
  );
}
