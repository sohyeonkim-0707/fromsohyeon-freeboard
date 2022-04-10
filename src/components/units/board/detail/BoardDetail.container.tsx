// 게시글 상세보기 container

import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();

  // 좋아요
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  // 싫어요
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  // 게시글 삭제
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  // 목록 페이지로 이동
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  // 수정하기 페이지로 이동
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 삭제하기 mutation
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      // alert("삭제가 완료되었습니다.");
      Modal.success({ content: "삭제가 완료되었습니다." });
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  // 좋아요 mutation 요청하기
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      // 다시 반영된 것 확인
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };
  // 싫어요 mutation 요청하기
  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      // 다시 반영된 것 확인
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
