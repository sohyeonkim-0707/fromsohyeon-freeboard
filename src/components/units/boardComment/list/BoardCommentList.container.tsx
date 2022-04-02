import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  // 댓글 데이터와 fetchMore 기능을 쓰기 위해 선언해주기
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  // onLoadMore 함수 만들어주기
  function onLoadMore() {
    if (!data) return; // 데이터가 없으면 스크롤 실행 방지

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      // 페이지는 전체댓글 갯수에 1페이지 10개니까 10으로 나눈 뒤 올림을 해줘야 전체 페이지 개수를 알 수 있음
      updateQuery: (prev, { fetchMoreResult }) => {
        // 이전 (현재 표출 중인) 데이터 + 다음 표출 데이터
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] }; // 다음 표출될 데이터 없을 경우 표출될 상황 만약 개수가 없다면 기존 페치보드만 넣어줘
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ], // 이전의 10개를 뿌리고, 추가로 받은 10개를 붙여서 fetchBoard를 업데이트
        }; // 이전 데이터와 다음 데이터 함께 표출(스프레드 연산자)
      },
    });
  }

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
