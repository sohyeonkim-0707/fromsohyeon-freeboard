// 게시글 목록 UI

import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import PagiNations01 from "../../../commons/paginations/01/Paginations01.container";
import Search01 from "../../../commons/search/01/Search01.container";
import { v4 as uuidv4 } from "uuid";
import RecentWatchBox from "../../market/list/recentwatchbox";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      {/* 검색 */}
      <Search01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>

      {props.data?.fetchBoards.map((el: any) => (
        // key = 고유값 _id 지정
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          {/* 검색하기 키워드 */}
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>

          <S.ColumnBasic>{el.writer}</S.ColumnBasic>

          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />

      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          🖌 게시물 등록하기
        </S.Button>
        {/* 페이지네이션 */}
        <PagiNations01 refetch={props.refetch} count={props.count} />
        <RecentWatchBox />
      </S.Footer>
    </S.Wrapper>
  );
}
